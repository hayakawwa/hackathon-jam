import { createSlice } from '@reduxjs/toolkit';
import {profileApi} from "@/api/profileApi";
import {ProfileSchema} from "@/store/types/ProfileSchema";


const initialState: { data: ProfileSchema } = {
    data: {}
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            profileApi.endpoints.getCurrentProfile.matchFulfilled,
            (state, action) => {
                state.data = {...state.data, ...action.payload}
            }
        );
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
