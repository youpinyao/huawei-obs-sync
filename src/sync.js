const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = {
  download,
  upload,
}

function download({ obs, dir }) {
  handle.obsDir({ obs, dir });

  const from = config.replaceObs(path.join(obs, dir));
  const to = path.resolve(process.cwd(), dir);

  const result = obsutil(['sync', from, to], true);

  return result;
}

function upload({ obs, dir }) {
  handle.obsDir({ obs, dir });

  const from = path.resolve(process.cwd(), dir);
  const to = config.replaceObs(path.join(obs, dir));

  const result = obsutil(['sync', from, to], true);

  return result;
}
