'use strict';

const errorMessages = {
  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
  USER_ALREADY_EXISTS: 'User already exists.',
  USER_NOT_FOUND: 'User not found.',
  NAME_MINIMUM_LENGTH: 'Name must be at least 3 characters long.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PHONE: 'Invalid phone number.',
  PHONE_MINIMUM_LENGTH: 'Phone must be at least 10 characters long.',
	OTP_GENERATION_LIMIT: 'You have exceeded the OTP generation limit. Please try ater some time.'
};

const errorDetails = {
  INTERNAL_SERVER_ERROR: 'Something went wrong, while we processing your request.',
  USER_ALREADY_EXISTS: 'The provided email or phone number is already associated with an existing user account.',
  USER_NOT_FOUND: 'The provide phone number is not matched with our records.',
  INVALID_INPUT: 'Please make sure the inputs are valid.',
	OTP_GENERATION_LIMIT: 'Maximum OTP generation limit has been reached.'
};
  
module.exports = {
  errorMessages,
  errorDetails
};