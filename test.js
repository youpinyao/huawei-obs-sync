const { upload } = require('./src/sync');

console.log(upload({
  obs: 'obs://anta-cn-web',
  dir: 'wxs_antacn',
}));

// const { download } = require('./src/sync');

// console.log(download({
//   obs: 'obs://anta-cn-web',
//   dir: 'wxs_antacn',
// }));
