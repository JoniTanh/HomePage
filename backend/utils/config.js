require("dotenv").config();

let PORT = process.env.PORT;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.DOMAIN;
const EMAIL = process.env.EMAIL;
let MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  PORT,
  MAILGUN_API_KEY,
  DOMAIN,
  EMAIL,
  MONGODB_URI,
};
