const authService = require('./auth.service');
const { ResponseError } = require('../../utils/response.model');


module.exports.login = async (req, res) => {
    const response = await authService.login(req);
    if (response instanceof ResponseError) {
        return res.status(response.status).json(response.error);
    }
    return res.status(200).send(response);
};

module.exports.refreshToken = async (req, res) => {
    const response = await authService.refreshToken(req);
    if (response instanceof ResponseError) {
        return res.status(response.status).json(response.error);
    }
    return res.status(200).send(response);
};

