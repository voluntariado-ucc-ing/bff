const donationsService = require('./donations.service');
const { ResponseError } = require('../../utils/response.model');


module.exports.getDonators = async (req, res) => {
    const response = await donationsService.getDonators(req);
    if (response instanceof ResponseError) {
        return res.status(parseInt(response.error.code)).json(response.error);
    }
    
    return res.status(200).send(response.data);
};

module.exports.getDonation = async (req, res) => {
    const response = await donationsService.getDonation(req);
    if (response instanceof ResponseError) {
      return res.status(response.status).json(response.error);
    }
    
    return res.status(200).send(response.data);
};

module.exports.createDonation = async (req, res) => {
    const response = await donationsService.createDonation(req);
    if (response instanceof ResponseError) {
        return res.status(response.status).json(response.error);
    }
    
    return res.status(201).send(response.data);
};

module.exports.getDonations = async (req, res) => {
    console.log('entrnado')
    const response = await donationsService.getDonations(req);
    if (response instanceof ResponseError) {
      return res.status(response.status).json(response.error);
    }
    
    return res.status(200).send(response.data);
};