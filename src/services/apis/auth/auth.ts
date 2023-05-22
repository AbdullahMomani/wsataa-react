import { createSlice } from "@reduxjs/toolkit";
import { requestAsyncThunk, responseAsyncThunk } from "../../templates";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface tokens {
  data: {
    tokens: {
      access: any;
      refresh: any;
    };
  };
}
interface UsersState {
  entities: tokens | any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  currentRequestId: number | undefined;
  error: any[] | undefined;
  status?: number;
  tempToken?: any | undefined;
  refreshCounter?: boolean | undefined;
}

const initialState = {
  loading: "idle",
  entities: undefined,
  currentRequestId: undefined,
  error: undefined,
  status: 0,
  refreshCounter: false,
} as UsersState;

export const signOut = createAsyncThunk(
  "admin/signOut",
  async (_, { dispatch }) => {
    dispatch(adminSlice.actions.resetAction());
  }
);

export const signIn = () => {
  return requestAsyncThunk({
    storeName: "auth",
    _url: `/api/v1/auth/admin/login`,
    method: "POST",
    exact: "/sign-in",
  });
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAction: () => {
      return initialState;
    },
    setAccessTempToken: (state, { payload: { tempToken } }: any) => {
      state.tempToken = tempToken;
      return state;
    },
    setAccessToken: (state, { payload: { accessToken } }: any) => {
      state.entities.tokens.access = accessToken;
      return state;
    },
  },
  extraReducers: responseAsyncThunk(signIn()),
});


export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetAction: () => {      
      return initialState;
    },
  },
  extraReducers: responseAsyncThunk(signIn()),
});
