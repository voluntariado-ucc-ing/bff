const express = require('express');
const donationsController = require('./donations.controller');

const api = express.Router();

api.get('/donators', donationsController.getDonators);
api.get('/get/:donation_id', donationsController.getDonation);
api.post('/create', donationsController.createDonation);
api.get('/all', donationsController.getDonations);

module.exports = api;