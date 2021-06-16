const donationsService = require('./donations.service');

module.exports.getDonators = async (req, res) => {
    const response = await donationsService.getDonators(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};

module.exports.getDonation = async (req, res) => {
    const response = await donationsService.getDonation(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);

};

module.exports.createDonation = async (req, res) => {
    const response = await donationsService.createDonation(req);
    let status = response.status;
    delete response['status']
    return res.status(status).send(response);

};

module.exports.createDonator = async (req, res) => {
    const response = await donationsService.createDonator(req);
    let status = response.status;
    delete response['status']
    return res.status(status).send(response);

};

module.exports.getDonations = async (req, res) => {
    const response = await donationsService.getDonations(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};

module.exports.updateDonation = async (req, res) => {
    const response = await donationsService.updateDonation(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};

module.exports.editDonator = async (req, res) => {
    const response = await donationsService.editDonator(req);
    let status = response.status;
    delete response['status'];
    return res.status(status).send(response);
};