import { Fetch } from 'loca-mfe-core';
import { BASE_API } from '../config/base';

const TEST_API = ''; //'https://gateway-front.nio.com/swc_webredirect/100157/pe/app'
const getCommonParams = () => {
  return {
    app_ver: '3.5.0'
  };
};

export const fetch = Fetch.genFetch(TEST_API || BASE_API, {
  needAuth: true,
  commonParams: getCommonParams()
});
