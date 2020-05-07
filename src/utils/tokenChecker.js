const jwt = require('jsonwebtoken')
const config = require('../../config/config');
//const constants = require('../utils/constants');
const { ResponseError } = require('./response.model');

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.tokenSecret, (err, decoded) => {
            if (err) {
                return res.status(401).send(new ResponseError('401', 'Unauthorized', 'Invalid or expired tokens'));
            }
            
            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send(new ResponseError("403", "Forbbiden", "JWT token is needed"));
    }
}
