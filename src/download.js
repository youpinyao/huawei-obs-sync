const client = require("./client");
const config = require("./config");
const checkDir = require("./checkDir");
const traverseObject = require("./traverseObject");

const path = require("path");
const ProgressBar = require("progress");

module.exports = async () => {
  const obs = client();
  const { bucket, dir } = config.get();

  checkDir();

  const files = await traverseObject();
  const bar = new ProgressBar(`下载 ${dir} [:bar] :percent :etas`, {
    total: files.length,
    width: 50,
  });
  const limit = 10;
  const doDownload = (file) => {
    return new Promise((resolve, reject) => {
      // console.log(chalk.yellow("下载中"), file);
      obs.getObject(
        {
          Bucket: bucket,
          Key: file,
          SaveAsFile: path.join(process.cwd(), file),
        },
        (err, result) => {
          if (err) {
            reject(err);
            // console.log(chalk.red("下载失败"), file);
          } else {
            resolve(result);
            // console.log(chalk.green("下载成功"), file);
          }
        }
      );
    });
  };

  for (let index = 0; index < Math.ceil(files.length / limit); index++) {
    const partFiles = [].concat(files).splice(index * limit, limit);

    await Promise.all(
      partFiles.map((item) =>
        doDownload(item).then(
          (res) => {
            bar.tick();
            return res;
          },
          (res) => {
            bar.tick();
            return res;
          }
        )
      )
    );
  }
};
