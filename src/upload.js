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

  const from = path.resolve(process.cwd(), dir);
  const to = obs;

  const result = obsutil(['cp', from, to, '-f', '-r'], true);

  return result;
}
