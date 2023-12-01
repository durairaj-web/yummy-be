"use strict"

const { body } = require('express-validator');
const { errorMessages } = require('./../../constants/lang/en/messages')

const validate = function(method, req, res, next){
  switch (method) {
    case 'register': {
      return [
        body('name').isLength({ min: 3, max: 100 }).withMessage(errorMessages.NAME_MINIMUM_LENGTH),
        body('email').isEmail().normalizeEmail().withMessage(errorMessages.INVALID_EMAIL),
        body('phone').isNumeric().withMessage(errorMessages.INVALID_PHONE)
          .isLength({ min: 10, max: 10 }).withMessage(errorMessages.PHONE_MINIMUM_LENGTH),
      ]
    }
		case 'login': {
      return [
        body('phone').isNumeric().withMessage(errorMessages.INVALID_PHONE)
          .isLength({ min: 10, max: 10 }).withMessage(errorMessages.PHONE_MINIMUM_LENGTH),
      ]
    }
  }
}

module.exports = validate;