import { includes } from "lodash";
import { tokenSelector, tempTokenSelector } from "./selectors";
import localforage from "localforage";

const AUTH_CHECK_METHODS = ["post", "put", "patch", "delete", "get"];

const authRequest = (store: any) => {
  return [
    async(config: any) => {      
      if (includes(AUTH_CHECK_METHODS, config.method)) {
        // const authToken = tokenSelector(store?.getState?.());
        const token = await tokenSelector(store?.getState?.());

        
        // const authTempToken = tempTokenSelector(store.getState());
        if (token )
          config.headers["Authorization"] = `Bearer ${
            token
          }`;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error.data.error.message);
    },
  ];
};

export default authRequest;
