#!/usr/bin/env node

const commander = require("commander");

commander
  .version(require("./package.json").version)
  .option("-i, --init", "config init")
  .option("-d, --download", "download sync dir")
  .option("-u, --upload", "upload sync dir")
  .parse(process.argv);

if (commander.init) {
  require("./src/init")();
} else if (commander.download) {
  require("./src/download")();
} else if (commander.upload) {
  require("./src/upload")();
}
