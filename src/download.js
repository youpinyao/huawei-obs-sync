const obsutil = require('./obsutil');
const path = require('path');
const config = require('./config');

module.exports = ({
  obs,
  dir,
}, filename, inherit = true) => {
  handle.obsDir({ obs, dir });

  const from = config.replaceObs(path.join(obs, dir, filename));
  const to = path.resolve(process.cwd(), dir, filename);

  const result = obsutil(['cp', from, to, '-f', '-r'], inherit);

  return result;
}
