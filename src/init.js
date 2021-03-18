const input = require("input");
const fs = require("fs");
const config = require("./config");

const inputOption = {
  validate: function (answer) {
    if (!answer) {
      return "必填";
    }
    return true;
  },
};

async function init() {
  const access_key_id = await getText("access_key_id");
  const secret_access_key = await getText("secret_access_key");
  const server = await getText("server(endpoint)");
  const bucket = await getText("bucket");
  const dir = await getText("dir");

  config.set({
    access_key_id,
    secret_access_key,
    server,
    bucket,
    dir,
  });

  if (fs.existsSync(config.package)) {
    const json = JSON.parse(fs.readFileSync(config.package).toString());

    if (!json) {
      json.scripts = {};
    }
    json.scripts["obs:sync:upload"] = "huawei-obs-sync --upload";
    json.scripts["obs:sync:download"] = "huawei-obs-sync --download";

    fs.writeFileSync(config.package, JSON.stringify(json, null, 2));
  } else {
    throw new Error("please run: npm init");
  }
}

function getText(type) {
  return new Promise((resolve, reject) => {
    input.text(`${type}：`, inputOption).then((d) => {
      resolve(d);
    }, reject);
  });
}

module.exports = init;
