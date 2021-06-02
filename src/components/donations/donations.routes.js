const express = require('express');
const donationsController = require('./donations.controller');

const api = express.Router();

api.get('/donators', donationsController.getDonators);
api.get('/get/:id', donationsController.getDonation);
api.post('/create', donationsController.createDonation);
api.post('/createdonor',donationsController.createDonator)
api.post('/editdonor',donationsController.)
api.get('/all', donationsController.getDonations);
api.patch('/:id', donationsController.updateDonation);

module.exports = api;