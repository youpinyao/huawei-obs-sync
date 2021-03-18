const ObsClient = require("esdk-obs-nodejs");
const config = require("./config");

module.exports = () => {
  // 创建ObsClient实例
  return new ObsClient({
    ...config.get(),
  });
};
