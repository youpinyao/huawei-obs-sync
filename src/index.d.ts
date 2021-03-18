import ObsClient from "esdk-obs-nodejs";

declare const HuaWeiObsSync: {
  getConfig: () => {
    access_key_id: string;
    secret_access_key: string;
    server: string;
    bucket: string;
    dir: string;
  };
  // https://support.huaweicloud.com/api-obs_nodejs_sdk_api_zh/obs_39_0001.html
  getClient: () => ObsClient;
};

export = HuaWeiObsSync;
