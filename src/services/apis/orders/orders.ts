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

export const getOrdersList = () => {
    return requestAsyncThunk({
        storeName: 'orders',
        _url: `api/v1/dashboard/orders`,
        method: 'GET',
        exact : '/list-of-orders'
    });
};

export const activateOrder = () => {
    return requestAsyncThunk({
        storeName: 'orders',
        _url: `api/v1/dashboard/orders`,
        method: 'PATCH',
        exact : '/activate-order'
    });
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getOrdersList()),
});


