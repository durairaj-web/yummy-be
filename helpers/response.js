'use strict';

const ApiResponse = {
  success(data = null) {
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

const MapErrorMsg = function (Error) {
  let message = '';
  Error.array().forEach((err,index) => {
    message += err.msg + (index < Error.array().length - 1 ? '\n' : '');
  })
  return message;
}
  
module.exports = {
  ApiResponse,
  MapErrorMsg
};