'use strict';

const errorMessages = {
	NAME_MINIMUM_LENGTH: 'Name must be at least 3 characters long.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PHONE: 'Invalid phone number.',
  PHONE_MINIMUM_LENGTH: 'Phone must be 10 characters long.',
	INVALID_OTP: 'Invalid OTP.',
	OTP_MINIMUM_LENGTH: 'OTP must be 6 characters long.',

  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
  USER_ALREADY_EXISTS: 'User already exists.',
  USER_NOT_FOUND: 'User not found.',
	OTP_GENERATION_LIMIT: 'You have exceeded the OTP generation limit. Please try ater some time.',
	USER_BLOCKED: 'Your account has been temporarily blocked due to multiple invalid login attempts.',
	WRONG_OTP: 'Please make sure the enterted OTP is correct.'
};

const errorDetails = {
  INTERNAL_SERVER_ERROR: 'Something went wrong, while we processing your request.',
  USER_ALREADY_EXISTS: 'The provided email or phone number is already associated with an existing user account.',
  USER_NOT_FOUND: 'The provide phone number is not matched with our records.',
  INVALID_INPUT: 'Please make sure the inputs are valid.',
	OTP_GENERATION_LIMIT: 'Maximum OTP generation limit has been reached.',
	USER_BLOCKED: 'For security reasons, we have restricted access for next 24 hours.',
	WRONG_OTP: 'Incorrect OTP'
};
  
module.exports = {
  errorMessages,
  errorDetails
};