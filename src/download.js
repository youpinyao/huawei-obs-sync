const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = (filename, to, inherit = true, sync = true) => {
  const { obs, dir } = config.get();

  handle.obsDir({ obs, dir });

  const from = config.replaceObs(path.join(obs, dir, filename));
  const result = obsutil(['cp', from, to, '-f', '-r'], inherit, sync);

  return result;
}
