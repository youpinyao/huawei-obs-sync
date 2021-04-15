const path = require('path');
const fs = require('fs');
const os = require('os');
const platform = os.platform();

const name = path.resolve(process.cwd(), '.obsconfig');

module.exports = {
  name,
  get,
  set,
  platform,
  withWindows: str => {
    if (platform === 'win32') {
      return str.replace(/\\/g, '/');
    }
    return str;
  },
  package: path.resolve(process.cwd(), './package.json'),
}

function get() {
  if (!fs.existsSync(name)) {
    throw new Error('please run: huawei-obs-sync --init');
  }
  return JSON.parse(fs.readFileSync(name).toString());
}
function set(config) {
  fs.writeFileSync(name, JSON.stringify(config, null, 2));
}
