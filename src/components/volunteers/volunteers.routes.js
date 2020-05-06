const express = require('express');
const volunteerController = require('./volunteers.controller');

const api = express.Router();

api.post('/foo', volunteerController.foo);


module.exports = api;