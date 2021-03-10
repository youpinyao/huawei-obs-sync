const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = (filename, from, inherit = true) => {
  const { obs, dir } = config.get();

  handle.obsDir({ obs, dir });

  const to = config.replaceObs(path.join(obs, dir, filename));
  const result = obsutil(['cp', from, to, '-f', '-r'], inherit);

  return result;
}
