import ObsClient from "esdk-obs-nodejs";

interface Opts {
  access_key_id: string;
  secret_access_key: string;
  server: string;
  bucket: string;
  dir: string;
};

declare const HuaWeiObsSync: {
  getConfig: () => Opts;
  // https://support.huaweicloud.com/api-obs_nodejs_sdk_api_zh/obs_39_0001.html
  getClient: (opts: Opts) => ObsClient;
};

export = HuaWeiObsSync;
