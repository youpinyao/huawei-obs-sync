const client = require("./client");
const config = require("./config");
const checkDir = require("./checkDir");
const traverseDir = require("./traverseDir");

const path = require("path");
// const chalk = require("chalk");
const ProgressBar = require("progress");

module.exports = async () => {
  const obs = client();
  const { bucket, dir } = config.get();

  checkDir();

  const files = traverseDir(path.resolve(process.cwd(), dir));
  const bar = new ProgressBar(`上传 ${dir} [:bar] :percent :etas`, {
    total: files.length,
    width: 50,
  });
  const limit = 10;

  const doUpload = (file) => {
    return new Promise((resolve, reject) => {
      obs.putObject(
        {
          Bucket: bucket,
          Key: config.withWindows(path.join(dir, path.relative(dir, file))),
          SourceFile: file,
        },
        (err, result) => {
          if (err) {
            reject(err);
            // console.log(chalk.red("上传失败"), file);
          } else if (result.CommonMsg.Status >= 300) {
            reject(err);
            // console.log(chalk.red("上传失败"), file);
          } else {
            resolve(result);
            // console.log(chalk.green("上传成功"), file);
          }
        }
      );
    });
  };

  for (let index = 0; index < Math.ceil(files.length / limit); index++) {
    const partFiles = [].concat(files).splice(index * limit, limit);

    await Promise.all(
      partFiles.map((item) =>
        doUpload(item).then(
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
