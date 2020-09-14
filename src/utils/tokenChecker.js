const jwt = require('jsonwebtoken')
const config = require('../../config/config');
const { Response } = require('./response.model');

const separator = " ";

module.exports = (req, res, next) => {
    const token = req.headers['authorization'] ? req.headers['authorization'].split(separator)[1] : null;
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.tokenSecret, (err, decoded) => {
            if (err) {
                return res.status(401).send(
                    new Response(
                        null,
                        {
                            code: 401,
                            message: 'Unauthorized', 
                            description: 'Invalid or expired tokens'
                        },
                        401
                    )
                );
            }
            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send(
            new Response(
                null,
                error= {
                    code: 403,
                    message: 'Forbbiden', 
                    description: "JWT token is needed"
                },
                403
            )
        )
    }
}
