import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localforage from "localforage";
import { authAPI, usersAPI ,offersAPI,ordersAPI , orderOfferDetailsAPI , citiesAPI} from "../services/apis";

const authPersistConfig = {
  key: "auth",
  storage: localforage,
  whiteList: ["entities"],
};
const authPersistReducer = persistReducer(
  authPersistConfig,
  authAPI.adminSlice.reducer
);

const reducers = combineReducers({
  admin: authPersistReducer,
  auth: authAPI.authSlice.reducer,
  users: usersAPI.usersSlice.reducer,
  offers: offersAPI.offersSlice.reducer,
  orders: ordersAPI.ordersSlice.reducer,
  orderOfferDetails: orderOfferDetailsAPI.ordersOfferDetailsSlice.reducer,
  cities: citiesAPI.citiesSlice.reducer,
});

export default reducers;
