'use strict';

const ApiResponse = {
    success(data) {
      return {
        status: 'success',
        data: data,
      };
    },
  
    error(message, code = 500, details = null) {
      return {
        status: 'error',
        message: message,
        error: {
          code: code,
          details: details,
        },
      };
    },
  };
  
  module.exports = ApiResponse;