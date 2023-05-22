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

export const getOffersList = () => {
    return requestAsyncThunk({
        storeName: 'offers',
        _url: `api/v1/dashboard/offers`,
        method: 'GET',
        exact : '/list-of-offers'
    });
};

export const activateOffer = () => {
    return requestAsyncThunk({
        storeName: 'offers',
        _url: `api/v1/dashboard/offers`,
        method: 'PATCH',
        exact : '/activate-offer'
    });
};

export const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getOffersList()),
});


