import get from "lodash/get";
import { SUCCESS_STATUS } from "../../constants/auth";
import { refreshTokenSelector } from "./selectors";
import { authAPI } from "../apis";
import { useLocation, useNavigate } from "react-router-dom";

const errorResponse = (store: any) => {
  const route = window.location.pathname;

  return [
    (response: any) => {
      return response;
    },
    async (error: any) => {
      const responseStatus = get(error, "response.status");
      console.log("error config", error.config);

      if (error.response) {
        // console.log("route",route);

        // const refreshToken = refreshTokenSelector(store?.getState?.());
        if (responseStatus === 401) {
          if (route !== "/wsataa-dasboard") {
            await store.dispatch(authAPI.signOut()).then(() => {
              window.location.href = "/wsataa-dasboard";
            });
          }
        }
      }

      return Promise.reject(error);
    },
  ];
};

export default errorResponse;
