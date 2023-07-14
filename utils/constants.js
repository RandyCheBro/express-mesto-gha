require('dotenv').config();

const { JWT_SECRET = 'some-secret-key' } = process.env;
module.exports.linkRegex = /(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/;
module.exports.jwtSecret = JWT_SECRET;
