const donationsService = require('./donations.service');
const { ResponseError } = require('../../utils/response.model');


module.exports.getDonators = async (req, res) => {
    const response = await donationsService.getDonators(req);
    if (response instanceof ResponseError) {
        return res.status(response.error.code).send(response);
    }

    return res.status(200).send(response.body);
};

module.exports.getDonation = async (req, res) => {
    const response = await donationsService.getDonation(req);
    if (response instanceof ResponseError) {
      return res.status(response.error.code).send(response);
    }
    return res.status(200).send(response.body);
};

module.exports.createDonation = async (req, res) => {
    const response = await donationsService.createDonation(req);
    if (response instanceof ResponseError) {
        return res.status(response.error.code).send(response);
    }
    return res.status(201).send(response.body);
};