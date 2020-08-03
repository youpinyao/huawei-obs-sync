const { upload } = require('./src/sync');

console.log(upload({
  obs: 'obs://anta-cn-web',
  dir: 'wxs_antacn',
}));

// const upload = require('./src/upload');

// console.log(upload({
//   obs: 'obs://anta-cn-web/wxs_antacn',
//   dir: 'images',
// }));
