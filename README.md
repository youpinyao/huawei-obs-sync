# HUAWEI OBS

## 初始化配置
```node
obs --init

or

npx obs --init
```

## 列表

```node
const {
  ls,
} = require('huawei-obs');

ls(); // 列出所有bucket

ls(obs_path) // 列出对应路径下的文件目录
```

## 上传

```node
const {
  upload,
} = require('huawei-obs');

upload({
  obs: 'obs://anta-cn-web', // obs 路径
  dir: 'wxs_antacn', // 同步目录
});
```

## 下载

```node
const {
  download,
} = require('huawei-obs');

download({
  obs: 'obs://anta-cn-web', // obs 路径
  dir: 'wxs_antacn', // 同步目录
});
```

## 同步上传

```node
const {
  sync,
} = require('huawei-obs');

sync.upload({
  obs: 'obs://anta-cn-web', // obs 路径
  dir: 'wxs_antacn', // 同步目录
});
```

## 同步下载

```node
const {
  sync,
} = require('huawei-obs');

sync.download({
  obs: 'obs://anta-cn-web', // obs 路径
  dir: 'wxs_antacn', // 同步目录
});
```
