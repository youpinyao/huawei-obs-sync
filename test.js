const download = require('./src/download');

console.log(download({
  obs: 'obs://anta-cn-web/wxs_antacn',
  dir: 'images',
}));

// const upload = require('./src/upload');

// console.log(upload({
//   obs: 'obs://anta-cn-web/wxs_antacn',
//   dir: 'images',
// }));
