const obsutil = require('./obsutil');
const path = require('path');

module.exports = ({
  obs,
  dir,
}) => {
  if (!obs) {
    throw new Error('please obs path');
  }
  if (!dir) {
    throw new Error('please dir path');
  }

  const from = path.join(obs, dir).replace(/obs:/, 'obs:/');
  const to = path.resolve(process.cwd());

  const result = obsutil(['cp', from, to, '-f', '-r'], true);

  return result;
}
