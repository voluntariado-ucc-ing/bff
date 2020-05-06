const express = require('express');
const authController = require('./auth.controller');

const api = express.Router();

api.post('/login', authController.login);
api.post('/verifyToken', authController.verifyToken);
api.post('/refreshToken', authController.refreshToken);

module.exports = api;