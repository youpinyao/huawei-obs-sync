
const obsutil = require('./obsutil');

module.exports = () => {
  obsutil(['config', '-interactive'], true);
}
