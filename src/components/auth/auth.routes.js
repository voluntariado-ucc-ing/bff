const express = require('express');
const authController = require('./auth.controller');

const api = express.Router();

api.post('/login', authController.login);
api.post('/refresh_token', authController.refreshToken);

module.exports = api;