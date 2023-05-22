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

export const getCitiesList = () => {
    return requestAsyncThunk({
        storeName: 'cities',
        _url: `api/v1/dashboard/city`,
        method: 'GET',
        exact : '/list-of-cities'
    });
};

export const addCity = () => {
    return requestAsyncThunk({
        storeName: 'cities',
        _url: `api/v1/dashboard/city`,
        method: 'POST',
        exact : '/add-city'
    });
};

export const deleteCity = () => {
    return requestAsyncThunk({
        storeName: 'cities',
        _url: `api/v1/dashboard/city`,
        method: 'DELETE',
        exact : '/delete-city'
    });
};

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getCitiesList()),
});


