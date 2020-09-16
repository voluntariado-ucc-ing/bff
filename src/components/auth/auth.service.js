const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const { Response } = require('../../utils/response.model');
const { redis_client } = require('../../utils/cache');
const axios = require('axios');

module.exports.login = async req => {

    return new Promise(async (resolve, reject) => {

        const options = {
            method: 'post',
            url: `/volunteer/auth`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
                
        try {
            let authResponse = await axios(options);
            return resolve(await createTokens(authResponse.data));
        }
        catch (err){
            return resolve(
                new Response(
                    null,
                    {
                        code: err.response.status,
                        message: 'Forbbiden', 
                        description: 'Incorrect username or password'
                    },
                    err.response.status,
                )
            );
        }
    }).catch(err => {
        console.log(err);
        return err;
    });
};

module.exports.refreshToken = async req => {

    return new Promise(async (resolve, reject) => {
        const data = req.body;
        let refreshToken = await redis_client.get(data.refresh_token);
        
        if (refreshToken) {
            jwt.verify(data.refresh_token, config.refreshSecret, async (err, user) => {
                if (err) {
                    await client.del(refreshToken);
                    return resolve(
                        new Response(
                            null,
                            {
                                code: 403,
                                message: 'Unauthorized', 
                                description: 'Invalid or expired tokens'
                            },
                            403
                        )
                    );
                }

                return resolve(await createTokens({}));
            })   
        } else {
            return resolve(
                new Response(
                    null,
                    {
                        code: 403,
                        message: 'Unauthorized', 
                        description: 'Invalid or expired tokens'
                    },
                    403
                )
            );
        }
    }).catch(err => {
        return err;
    });
}

createTokens = async (body) => {
    return new Promise((resolve, reject) => {
        const token = jwt.sign({subs:''}, config.tokenSecret, { expiresIn: config.tokenLife });
        const refreshToken = jwt.sign({subs:''}, config.refreshSecret, { expiresIn: config.refreshLife });
        const responseJWT = {
            expiry: new Date(new Date().getTime() + config.tokenLifeMiliseconds).getTime(),
            token: token,
            refresh_token: refreshToken
        }
        
        redis_client.set(refreshToken, '', (err, res) => {
            console.log(res);
            console.log(err);
        });
        return resolve(new Response(
            {...responseJWT, ...body}, 
            null, 
            200));
    }).catch(err => {
        console.log(err);
        return err;
    });
}
