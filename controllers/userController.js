'use strict';

const { Op, literal } = require('sequelize');
const { validationResult } = require('express-validator');
const { User } = require('./../models');
const { sendMobileOtp } = require('./../service/twilio');
const { ApiResponse, MapErrorMsg } = require('../helpers/response');
const { errorMessages, errorDetails } = require('./../constants/lang/en/messages');

const UserController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, phone } = req.body;

      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).send(
          ApiResponse.error(
            MapErrorMsg(result),
            400,
            errorDetails.INVALID_INPUT
          )
        );
      }
      
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email }, { phone }],
        },
      });
      
      if (existingUser) {
        return res.status(409).send(
          ApiResponse.error(
            errorMessages.USER_ALREADY_EXISTS,
            409,
            errorDetails.USER_ALREADY_EXISTS
          )
        );
      }
      
      await User.create({ name, email, phone });
      return res.status(200).send(ApiResponse.success());
    } catch (error) {
      console.error(error);
      return res.status(500).send(ApiResponse.error(
        errorMessages.INTERNAL_SERVER_ERROR, 500, errorDetails.INTERNAL_SERVER_ERROR
      ));
    }
  },

  loginUser: async (req, res) => {
    try {
    	const { phone } = req.body;

      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).send(
          ApiResponse.error(
            MapErrorMsg(result),
            400,
            errorDetails.INVALID_INPUT
          )
        );
      }

			// Find user by phone number
			const user = await User.findOne({ 
				where: { phone },
				attributes: ['id', 'otpGenerationCount', 'otpGeneratedAt']
			});
			if (!user) {
				return res.status(404).send(
					ApiResponse.error(
						errorMessages.USER_NOT_FOUND,
						400,
						errorDetails.USER_NOT_FOUND
					)
				);
			}

			// Check if the user has exceeded the OTP generation limit
			// if otp generated count greater than or equal to 3 and geneartion time less than 1 hour
			if (user.otpGenerationCount >= process.env.MAX_ALLOWED_OTP_COUNT) {
				if(user.otpGeneratedAt > new Date(Date.now() - 60 * 60 * 1000)){
					return res.status(403).send(
						ApiResponse.error(
							errorMessages.OTP_GENERATION_LIMIT,
							403,
							errorDetails.OTP_GENERATION_LIMIT
						)
					);
				}else{
					// after limition peroid count should reset from 3 to 0
					await user.update({
						otpGenerationCount: 0
					});
				}
			}

			// Generate a random 6-digit OTP
			const otp = Math.floor(100000 + Math.random() * 900000);

			// Update OTP in the database
			await user.update({ 
				otp: otp.toString(),
				otpGeneratedAt: new Date(),
				otpGenerationCount: literal('otpGenerationCount + 1')
			});

			// Send OTP via SMS using Twilio
			if(process.env.NODE_ENV == "production"){
				sendMobileOtp(phone, otp);
			}

			res.status(200).send(ApiResponse.success());
    } catch (error) {
      console.error(error);
      return res.status(500).send(ApiResponse.error(
      	errorMessages.INTERNAL_SERVER_ERROR, 500, errorDetails.INTERNAL_SERVER_ERROR
      ));
    }
  },
};
  
module.exports = UserController;