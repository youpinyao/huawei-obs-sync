const obsutil = require('./obsutil');
const path = require('path');
const config = require('./config');

module.exports = ({
  obs,
  dir,
}) => {
  handle.obsDir({ obs, dir });

  const from = config.config.replaceObs(path.join(obs, dir));
  const to = path.resolve(process.cwd());

  const result = obsutil(['cp', from, to, '-f', '-r'], true);

  return result;
}
