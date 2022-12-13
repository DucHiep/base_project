import {createSelector, createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
};
const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {}
});

export const appActions = appSlice.actions;

const stateApp = (state) => state.app;
const isAuthenticated = createSelector(stateApp, (state) => state.isAuthenticated)

export const appSelects = {
    isAuthenticated
};

export default appSlice.reducer;