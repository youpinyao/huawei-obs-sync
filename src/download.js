const obsutil = require('./obsutil');
const path = require('path');

module.exports = ({
  obs,
  dir,
}) => {
  handle.obsDir({ obs, dir });

  const from = path.join(obs, dir).replace(/obs:/, 'obs:/');
  const to = path.resolve(process.cwd());

  const result = obsutil(['cp', from, to, '-f', '-r'], true);

  return result;
}
