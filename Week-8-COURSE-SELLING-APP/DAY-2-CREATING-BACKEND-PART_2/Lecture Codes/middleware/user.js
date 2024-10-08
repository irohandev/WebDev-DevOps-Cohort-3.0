// Import the jwt module to handle json web tokens
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")




function userMiddleware(req, res, next){

}

module.exports = {
    userMiddleware: userMiddleware
}