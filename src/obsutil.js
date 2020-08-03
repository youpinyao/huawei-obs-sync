const chalk = require('chalk');
const path = require('path');
const spawn = require('cross-spawn');
const config = require('./config');
const spawnOption = { stdio: 'inherit' };

module.exports = function exec(cmd, inherit = false) {
  // const obsutil = {
  //   'darwin': path.resolve(__dirname, '../package/obsutil_darwin_amd64_5.2.5/obsutil'),
  //   'linux': path.resolve(__dirname, '../package/obsutil_linux_amd64_5.2.5/obsutil'),
  //   'win32': 'obsutil',
  // }[platform];
  const {
    obsutil: defaultObsutil,
  } = config.get();

  const obsutil = defaultObsutil || 'obsutil';

  if (!obsutil) {
    throw new Error(`${config.platform} obsutil is undefined, please install obsutil, https://support.huaweicloud.com/utiltg-obs/obs_11_0003.html`);
  }

  const result = spawn.sync(obsutil, cmd, inherit ? spawnOption : {});

  if (result.error) {
    if (result.error.stack.indexOf('obsutil ENOENT') !== -1) {
      throw Error('please install obsutil');
    } else {
      throw result.error;
    }
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
