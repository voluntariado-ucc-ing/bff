const hash = "secret"
const hashRefresh = "secretpor2"


const tokenSecret = hash;
const refreshSecret = hashRefresh;

const tokenLife = '10m';
const refreshLife = '7d';
const tokenLifeMiliseconds = 600000;

module.exports = {
  refreshLife,
  refreshSecret,
  tokenLife,
  tokenSecret,
  tokenLifeMiliseconds
}
