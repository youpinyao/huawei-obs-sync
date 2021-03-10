#!/usr/bin/env node

const commander = require('commander');
const config = require('./src/config');

commander
  .version(require('./package.json').version)
  .option('-i, --init [type]', 'init a config file type = all,base,obs')
  .option('-ls, --list [obs]', 'list file or bucket')
  .option('-m, --marker [marker]', 'list marker, use with -ls or --list')
  .option('-sd, --sync-download', 'download sync dir')
  .option('-su, --sync-upload', 'upload sync dir')
  .option('-stat, --stat <filename>', 'query file stat')
  .parse(process.argv);

if (commander.init) {
  if (commander.init === 'base') {
    require('./src/init').base();
  } else if (commander.init === 'obs') {
    require('./src/init').obs();
  } else {
    require('./src/init').all();
  }
} else if (commander.list) {
  require('./src/ls')(
    commander.list === true ? '' : commander.list,
    commander.marker === true ? '' : commander.marker,
  );
} else if (commander.syncDownload) {
  require('./src/sync').download(config.get());
} else if (commander.syncUpload) {
  require('./src/sync').upload(config.get());
} else if (commander.stat) {
  require('./src/sync').stat(config.get(), commander.stat);
}
