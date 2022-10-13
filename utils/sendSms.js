require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.SMS_AUTH_TOKEN;

const sendSms = async (phone, message) => {
  const client = require("twilio")(accountSid, authToken);
  try {
    let res = await client.messages.create({
      body: message,
      from: "+1 240 730 3653",
      to: phone,
    });
    console.log("res", res);
  } catch (err) {
    console.log("err", JSON.stringify(err.data));
    return err;
  }
};

module.exports = sendSms;
