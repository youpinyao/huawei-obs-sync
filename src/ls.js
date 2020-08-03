const obsutil = require("./obsutil")

module.exports = function (obs, marker) {
  const arr = [];

  if (obs) {
    arr.push(obs);
  }
  if (marker) {
    arr.push('-marker=' + marker)
  }

  return obsutil(['ls', ...arr], true);
}
