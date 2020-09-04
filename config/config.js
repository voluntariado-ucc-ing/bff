const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("Volunteer", salt);
const hashRefresh = bcrypt.hashSync("Volunteers", salt);

const tokenSecret = hash;
const refreshSecret = hashRefresh;

const tokenLife = '10m';
const refreshLife = '20m';

module.exports = {
  refreshLife,
  refreshSecret,
  tokenLife,
  tokenSecret
}
