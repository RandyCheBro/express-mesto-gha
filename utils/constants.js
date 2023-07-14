require('dotenv').config();

module.exports.linkRegex = /(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/;
module.exports.JWT_SECRET = process.env;
