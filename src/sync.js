const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');
const config = require('./config');

module.exports = {
  download,
  upload,
}

function download(inherit = true) {
  const { obs, dir } = config.get();
  handle.obsDir({ obs, dir });

  const from = config.replaceObs(path.join(obs, dir));
  const to = path.resolve(process.cwd(), dir);

  const result = obsutil(['sync', from, to], inherit);

  return result;
}

function upload(inherit = true) {
  const { obs, dir } = config.get();
  handle.obsDir({ obs, dir });

  const from = path.resolve(process.cwd(), dir);
  const to = config.replaceObs(path.join(obs, dir));

  const result = obsutil(['sync', from, to], inherit);

  return result;
}
