const authService = require('./auth.service');

module.exports.login = async (req, res) => {
    const response = await authService.login(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};

module.exports.refreshToken = async (req, res) => {
    const response = await authService.refreshToken(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};

