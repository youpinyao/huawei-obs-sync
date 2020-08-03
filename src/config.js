const path = require('path');
const fs = require('fs');

const name = path.resolve(process.cwd(), '.obsconfig');

module.exports = {
  name,
  get,
  set,
  package: path.resolve(process.cwd(), './package.json'),
}

function get() {
  if (!fs.existsSync(name)) {
    throw new Error('please run: obs --init obs');
  }
  return JSON.parse(fs.readFileSync(name).toString());
}
function set(config) {
  fs.writeFileSync(name, JSON.stringify(config, null, 2));
}
