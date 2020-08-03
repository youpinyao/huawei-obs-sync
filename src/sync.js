const obsutil = require('./obsutil');
const handle = require('./handle');
const path = require('path');

module.exports = {
  download,
  upload,
}

function download({ obs, dir }) {
  handle.obsDir({ obs, dir });

  const from = path.join(obs, dir).replace(/obs:/, 'obs:/');
  const to = path.resolve(process.cwd(), dir);

  const result = obsutil(['sync', from, to], true);

  return result;
}

function upload({ obs, dir }) {
  handle.obsDir({ obs, dir });

  const from = path.resolve(process.cwd(), dir);
  const to = path.join(obs, dir).replace(/obs:/, 'obs:/');

  const result = obsutil(['sync', from, to], true);

  return result;
}
