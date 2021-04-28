const ObsClient = require("esdk-obs-nodejs");
const config = require("./config");

module.exports = (opts) => {
  // 创建ObsClient实例
  return new ObsClient({
    ...(opts || config.get()),
  });
};
