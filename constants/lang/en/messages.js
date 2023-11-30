const errorMessages = {
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    USER_ALREADY_EXISTS: 'User already exists',
    USER_NOT_FOUND: 'User not found',
    // Add more error codes and messages as needed
};

const errorDetails = {
    INTERNAL_SERVER_ERROR: 'Something went wrong, while we processing your request.',
    USER_ALREADY_EXISTS: 'The provided email or phone number is already associated with an existing user account.',
    USER_NOT_FOUND: 'User not found',
    // Add more error codes and messages as needed
};
  
module.exports = {
    errorMessages,
    errorDetails
};