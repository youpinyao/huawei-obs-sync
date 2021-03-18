import ObsClient from "esdk-obs-nodejs";

declare interface HuaWeiObsSync {
  getConfig: () => HuaWeiObsSync.Config;
  getClient: () => HuaWeiObsSync.Client;
}

declare namespace HuaWeiObsSync {
  interface Config {
    access_key_id: string;
    secret_access_key: string;
    server: string;
    bucket: string;
    dir: string;
  }
  // https://support.huaweicloud.com/api-obs_nodejs_sdk_api_zh/obs_39_0001.html
  type Client = ObsClient;
}

export = HuaWeiObsSync;
