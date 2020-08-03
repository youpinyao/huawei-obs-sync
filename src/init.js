const os = require('os');
const platform = os.platform();
const input = require('input');
const fs = require('fs');
const obsutil = require('./obsutil');
const config = require('./config');

const inputOption = {
  validate: function (answer) {
    if (!answer) {
      return '必填';
    }
    return true;
  }
}

module.exports = {
  async all() {
    await obs();
    base();
  },
  base,
  obs,
};

function base() {
  obsutil(['config', '-interactive'], true);
}

async function obs() {
  let obsutilPath;
  if (platform !== 'win32') {
    obsutilPath = await getText('obsutil path');
  }
  const obs = await getText('obs path');
  const dir = await getText('sync dir');

  config.set({
    obsutil: obsutilPath,
    obs,
    dir,
  });

  if (fs.existsSync(config.package)) {
    const json = JSON.parse(fs.readFileSync(config.package).toString());

    if (!json) {
      json.scripts = {};
    }
    json.scripts['obs:sync:upload'] = 'obs --sync-upload';
    json.scripts['obs:sync:download'] = 'obs --sync-download';

    fs.writeFileSync(config.package, JSON.stringify(json, null, 2));
  } else {
    throw new Error('please run: npm init');
  }
}


function getText(type) {
  return new Promise((resolve, reject) => {
    input.text(`${type}：`, inputOption).then(d => {
      resolve(d);
    });
  });
}
