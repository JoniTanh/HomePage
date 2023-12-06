require("dotenv").config();

let PORT = process.env.PORT;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.DOMAIN;
const EMAIL = process.env.EMAIL;

module.exports = {
  PORT,
  MAILGUN_API_KEY,
  DOMAIN,
  EMAIL,
};
