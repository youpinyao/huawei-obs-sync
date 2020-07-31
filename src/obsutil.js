const os = require('os');
const platform = os.platform();
const path = require('path');
const spawn = require('cross-spawn');
const spawnOption = { stdio: 'inherit' };

console.log('platform', platform);

module.exports = function exec(cmd, inherit = false) {
  const obsutil = {
    'darwin': path.resolve(__dirname, '../package/obsutil_darwin_amd64_5.2.5/obsutil'),
    'linux': path.resolve(__dirname, '../package/obsutil_linux_amd64_5.2.5/obsutil'),
    'win32': 'obsutil',
  }[platform];

  if (!obsutil) {
    throw new Error(`${platform} obsutil undefined`);
  }

  const result = spawn.sync(obsutil, cmd, inherit ? spawnOption : {});

  return toString(result);
}


function toString(result) {
  return result.output.map(item => item && item.toString && item.toString() !== 'undefined' ? item.toString() : '').join('').trim();
}

function needSetAkSkEndPoint(str) {
  return str.indexOf('Warn: Please set ak, sk and endpoint in the configuration file') !== -1;
}
