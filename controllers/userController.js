const { Op } = require('sequelize');
const { User } = require('./../models')
const ApiResponse = require('./../utils/response')
const { errorMessages, errorDetails } = require('./../constants/lang/en/messages')

const UserController = {
    registerUser: async (req, res) => {
        try {
            const { name, email, phone } = req.body;
      
            const existingUser = await User.findOne({
              where: {
                [Op.or]: [{ email }, { phone }],
              },
            });
      
            if (existingUser) {
              return res.status(409).json(
                ApiResponse.error(
                    errorMessages.USER_ALREADY_EXISTS,
                    409,
                    errorDetails.USER_ALREADY_EXISTS
                )
              );
            }
      
            const newUser = await User.create({ name, email, phone });
            return res.status(200).json(ApiResponse.success(newUser));
          } catch (error) {
            console.error(error);
            return res.status(500).json(ApiResponse.error(
                errorMessages.INTERNAL_SERVER_ERROR, 500, errorDetails.INTERNAL_SERVER_ERROR
            ));
          }
    },
};
  
module.exports = UserController;