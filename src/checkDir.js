const fs = require("fs");
const path = require("path");
const config = require("./config");

module.exports = () => {
  const { dir } = config.get();
  const fullDir = path.resolve(process.cwd(), dir);

  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir);
  }
};
