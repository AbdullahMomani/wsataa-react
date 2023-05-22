import { createSlice } from '@reduxjs/toolkit';
import { requestAsyncThunk, responseAsyncThunk } from '../../templates';


interface UsersState {
    entities:  any;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    currentRequestId: number | undefined;
    error: any[] | undefined;
    status?: number;
    tempToken?: any | undefined;
    refreshCounter?: boolean | undefined;
}

const initialState = {
    loading: 'idle',
    entities: undefined,
    currentRequestId: undefined,
    error: undefined,
    status: 0,
    refreshCounter: false,
} as UsersState;

export const getUsersList = () => {
    return requestAsyncThunk({
        storeName: 'users',
        _url: `api/v1/dashboard/users`,
        method: 'GET',
        exact : '/list-of-users'
    });
};

export const blockOrUnblockUser = () => {
    return requestAsyncThunk({
        storeName: 'users',
        _url: `/api/v1/dashboard/users`,
        method: 'PATCH',
        exact : '/block-unblock-user'
    });
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getUsersList()),
});


