'use strict'
const twilio = require('twilio');
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendMobileOtp = async function(phoneNumber, otp){
  await twilioClient.messages.create({
    body: `Your login OTP is: ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phoneNumber,
  });
}

module.exports = {
  sendMobileOtp
}