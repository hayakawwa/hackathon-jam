import { createListenerMiddleware } from '@reduxjs/toolkit';
import {authApi} from "@/api/authApi";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        console.log('asdasdasd')
        if (action.payload.access_token) {
            localStorage.setItem(
                'access_token',
                action.payload.access_token
            );
        }
    }
});

listenerMiddleware.startListening({
    matcher: authApi.endpoints.register.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        console.log('asdasdasd')
        if (action.payload.access_token) {
            localStorage.setItem(
                'access_token',
                action.payload.access_token
            );
        }
    }
});
