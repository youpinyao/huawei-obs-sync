const obsutil = require("./obsutil")

module.exports = function () {
  return obsutil(['ls', '-s'], true);
}
