const client = require("./client");
const config = require("./config");

const HuaWeiObsSync = {
  getConfig: () => config(),
  getClient: () => client(),
};

module.exports = HuaWeiObsSync;
