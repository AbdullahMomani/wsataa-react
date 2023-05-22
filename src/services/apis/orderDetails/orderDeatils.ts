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

export const getOrdersOrOfferDetails = () => {
    return requestAsyncThunk({
        storeName: 'orderOfferDetails',
        _url: `api/v1/user/`,
        method: 'GET',
        exact : '/order-offer-details'
    });
};


export const ordersOfferDetailsSlice = createSlice({
    name: 'orderOfferDetails',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getOrdersOrOfferDetails()),
});


