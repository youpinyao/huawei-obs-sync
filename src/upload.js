const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');

module.exports = ({
  obs,
  dir,
}) => {
  handle.obsDir({ obs, dir });

  const from = path.resolve(process.cwd(), dir);
  const to = obs;

  const result = obsutil(['cp', from, to, '-f', '-r'], true);

  return result;
}
