const jwt = require("jsonwebtoken");

const KEY = process.env.JWT_SECRET_KEY || "123-ABC-XYZ";
const EXPIRE = { expiresIn: process.env.JWT_EXPIRATION || "24h" };

exports.EncodeToken = (email, user_id) => {
  const PAYLOAD = { email, user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, KEY);
  } catch (e) {
    console.error("JWT verification failed:", e.message);
    return null;
  }
};



// const jwt = require("jsonwebtoken");

// exports.EncodeToken = (email, user_id) => {
//   let KEY = "123-ABC-XYZ";
//   let EXPIRE = { expiresIn: "24h" };
//   let PAYLOAD = { email: email, user_id: user_id };

//   return jwt.sign(PAYLOAD, KEY, EXPIRE);
// };

// exports.DecodeToken = (token) => {
//   try {
//     let KEY = "123-ABC-XYZ";
//     return jwt.verify(token, KEY);
//   } catch (e) {
//     return null;
//   }
// };