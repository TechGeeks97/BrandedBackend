require("dotenv").config();

const accountSid = "ACf7bd2af72ff3ea7ba9daefa5b822ea24";
const authToken = "4085ad670477ce8bfafc8c208944b590";

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
