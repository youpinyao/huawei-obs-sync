#!/usr/bin/env node

const commander = require('commander');

commander
  .version(require('./package.json').version)
  .option('-i, --init', 'init a config file', () => {
    require('./src/init')();
  })
  .option('-ls, --list', 'init a config file', () => {
    require('./src/ls')();
  })
  .parse(process.argv);
