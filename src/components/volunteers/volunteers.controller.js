const volunteerService = require('./volunteers.service');
const { ResponseError } = require('../../utils/response.model');


module.exports.get = async (req, res) => {
  const response = await volunteerService.get(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).send(response.error);
  }
  
  return res.status(200).send(response.data);
};


module.exports.getByUsername = async (req, res) => {
  const response = await volunteerService.getByUsername(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.getAllVolunteers = async (req, res) => {
  const response = await volunteerService.getAllVolunteers(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.getMedicalInfo = async (req, res) => {
  const response = await volunteerService.getMedicalInfo(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.create = async (req, res) => {
  const response = await volunteerService.create(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.importCsv = async (req, res) => {
  const response = await volunteerService.importCsv(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.setMedicalInfo = async (req, res) => {
  const response = await volunteerService.setMedicalInfo(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.update = async (req, res) => {
  const response = await volunteerService.update(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.updatePassword = async (req, res) => {
  const response = await volunteerService.updatePassword(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};

module.exports.delete = async (req, res) => {
  const response = await volunteerService.delete(req);
  if (response instanceof ResponseError) {
    return res.status(response.status).json(response.error);
  }
  
  return res.status(200).send(response.data);
};