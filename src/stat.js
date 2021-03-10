
const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = function stat({ obs, dir }, filename, inherit = true) {
  handle.obsDir({ obs, dir });

  const to = config.replaceObs(path.join(obs, dir, filename));
  const result = obsutil(['stat', to], inherit);

  return result;
}
