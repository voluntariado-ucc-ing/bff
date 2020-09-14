const volunteerService = require('./volunteers.service');

module.exports.get = async (req, res) => {
  const response = await volunteerService.get(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.getByUsername = async (req, res) => {
  const response = await volunteerService.getByUsername(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.getAllVolunteers = async (req, res) => {
  const response = await volunteerService.getAllVolunteers(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.getMedicalInfo = async (req, res) => {
  const response = await volunteerService.getMedicalInfo(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.create = async (req, res) => {
  const response = await volunteerService.create(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.importCsv = async (req, res) => {
  const response = await volunteerService.importCsv(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.setMedicalInfo = async (req, res) => {
  const response = await volunteerService.setMedicalInfo(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.update = async (req, res) => {
  const response = await volunteerService.update(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.updatePassword = async (req, res) => {
  const response = await volunteerService.updatePassword(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};

module.exports.delete = async (req, res) => {
  const response = await volunteerService.delete(req);
  let status = response.status;
  delete response['status'];
  return res.status(status).send(response);
};