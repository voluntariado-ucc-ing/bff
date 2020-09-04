const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const { Response, ResponseError } = require('../../utils/response.model');
const axios = require('axios');

const tokenList = {}

module.exports.login = async req => {

    return new Promise(async (resolve, reject) => {

        const options = {
            method: 'post',
            url: `/volunteer/auth`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        let authResponse = await axios(options);

        if(authResponse != '202'){
            return reject(new ResponseError("403", "Forbbiden", "Incorrect username or password"));
        } 
        
        return resolve(await createTokens(username));
    }).catch(err => {
        console.log(err);
        return err;
    });
};

module.exports.refreshToken = async req => {

    return new Promise(async (resolve, reject) => {
        const data = req.body;

        if ((data.refreshToken) && (data.refreshToken in tokenList)) {
            const username = data.username;

            const refresh = data.refreshToken.replace('Bearer ', '');

            jwt.verify(refresh, config.refreshSecret, async (err, user) => {
                if (err) {
                    return reject(new ResponseError('403', 'Unauthorized', 'Invalid or expired tokens'));
                } 

                return resolve(await createTokens(username));
            })   
        } else {
            return reject(new ResponseError('403', 'Unauthorized', 'Invalid or expired tokens'));
        }
    }).catch(err => {
        console.log(err);
        return err;
    });
}

createTokens = (username) => {
    return new Promise((resolve, reject) => {
        const token = jwt.sign({ sub: username }, config.tokenSecret, { expiresIn: config.tokenLife });
        const refreshToken = jwt.sign({ sub: username }, config.refreshSecret, { expiresIn: config.refreshLife });
        const responseJWT = {
            status: 'Logged in',
            token: token,
            refreshToken: refreshToken
        }
        
        tokenList[refreshToken] = responseJWT;
        return resolve(new Response(responseJWT));
    }).catch(err => {
        console.log(err);
        return err;
    });
}