const volunteerService = require('./volunteers.service');
const { ResponseError } = require('../../utils/response.model');


module.exports.auth = async (req, res) => {
  const response = await volunteerService.auth(req);
  if (response instanceof ResponseError) {
    return res.status(response.error.code).send(response);
  }
  return res.status(200).send(response);
};

module.exports.foo = async (req, res) => {
    
    return res.status(200).send("sasdaas");
  };