const chalk = require("chalk");
const client = require("./client");
const config = require("./config");

const path = require("path");

module.exports = () => {
  const obs = client();
  const { bucket, dir } = config.get();
  const limit = 100;
  const files = [];

  return new Promise((resolve, reject) => {
    const listAll = (marker) => {
      obs.listObjects(
        {
          Bucket: bucket,
          MaxKeys: limit,
          Prefix: `${dir}/`,
          Marker: marker,
        },
        (err, result) => {
          if (err) {
            console.error(chalk.red("listBuckets fail"), err);
            reject(err);
          } else {
            console.error(chalk.green(`listBuckets success limit ${limit} marker ${marker}`));
            if (result.CommonMsg.Status < 300 && result.InterfaceResult) {
              for (let j = 0; j < result.InterfaceResult.Contents.length; j++) {
                const file = result.InterfaceResult.Contents[j].Key;

                if (path.parse(file).ext) {
                  files.push(file);
                }
              }
              if (result.InterfaceResult.IsTruncated === "true") {
                listAll(result.InterfaceResult.NextMarker);
              } else {
                resolve(files);
              }
            }
          }
        }
      );
    };
    listAll();
  });
};
