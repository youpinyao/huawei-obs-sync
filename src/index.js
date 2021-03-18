const client = require("./client");
const config = require("./config");

module.exports = {
  getConfig: () => config().get(),
  getClient: () => client(),
};
