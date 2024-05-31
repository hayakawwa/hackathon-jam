import { createSlice } from '@reduxjs/toolkit';
import {authApi} from "@/api/authApi";


const initialState: { username: string } = {
    username: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, action) => {
                state.username = action.payload.username as string
            }
        ).addMatcher(
            authApi.endpoints.register.matchFulfilled,
            (state, action) => {
                state.username = action.payload.username as string
            }
        )
    }
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
