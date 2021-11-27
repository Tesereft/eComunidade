const jwt = require("jsonwebtoken");
const config = require("./auth-config/config.json");

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if(authHeader === undefined) {
        return response.status(500).send("Header not found");
    }
    const parts = authHeader.split(" ");
    if(!parts.length === 2){
        return response.status(500).send("Header found was not correctly formated");
    }

    const [scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return response.status(500).send("Auth Header not correctly formated");
    }

    jwt.verify(token, config.secret, (error, decoded) => {
        if(error) {
            return response.status(500).send(error);
        }

        request.userId = decoded.params.id;
        return next();
    })
}