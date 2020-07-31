# HUAWEI OBS

## 初始化配置
```node
obs --init

or

npx obs --init
```

## 上传

```node
const {
  upload,
} = require('huawei-obs');

upload({
  obs: 'obs://anta-cn-web/wxs_antacn', // obs 路径
  dir: 'images', // 同步目录
});
```

## 下载

```node
const {
  download,
} = require('huawei-obs');

download({
  obs: 'obs://anta-cn-web/wxs_antacn', // obs 路径
  dir: 'images', // 同步目录
});
```
