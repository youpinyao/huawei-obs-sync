const os = require('os');
const platform = os.platform();
const chalk = require('chalk');
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
    // window自定运行安装
    if (platform === 'win32') {
      spawn.sync(path.resolve(__dirname, '../package/obsutil_windows_amd64_5.2.5/obsutil.exe'), [], spawnOption);
    }
    throw new Error(`${platform} obsutil undefined`);
  }

  const result = spawn.sync(obsutil, cmd, inherit ? spawnOption : {});

  if (result.error) {
    throw result.error;
  }

  if (needSetAkSkEndPoint(toString(result))) {
    console.log(chalk.yellow('please run: obs --init'));
  }

  return toString(result);
}


function toString(result) {
  return result.output.map(item => item && item.toString && item.toString() !== 'undefined' ? item.toString() : '').join('').trim();
}

function needSetAkSkEndPoint(str) {
  return str.indexOf('Warn: Please set ak, sk and endpoint in the configuration file') !== -1;
}
