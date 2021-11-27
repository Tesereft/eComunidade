const jwt = require("jsonwebtoken");
const authConfig = require("../middleware/auth-config/config.json")

function generateToken(params = {}) {
    return jwt.sign({params}, authConfig.secret)
}

module.exports = generateToken;