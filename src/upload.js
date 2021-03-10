const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = ({
  obs,
  dir,
}, filename, inherit = true) => {
  handle.obsDir({ obs, dir });

  const from = path.resolve(process.cwd(), dir, filename);
  const to = config.replaceObs(path.join(obs, dir, filename));

  const result = obsutil(['cp', from, to, '-f', '-r'], inherit);

  return result;
}
