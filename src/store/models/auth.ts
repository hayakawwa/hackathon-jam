import { createListenerMiddleware } from '@reduxjs/toolkit';
import {authApi} from "@/api/authApi";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        if (action.payload.access_token && typeof window !== 'undefined') {
            localStorage.setItem(
                'access_token',
                action.payload.access_token)
        }
        if (action.payload.username  && typeof window !== 'undefined') {
            localStorage.setItem(
                'username',
                action.payload.username)
        }
    }
})

listenerMiddleware.startListening({
    matcher: authApi.endpoints.register.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        if (action.payload.access_token && typeof window !== 'undefined') {
                localStorage.setItem(
                    'access_token',
                    action.payload.access_token)
        }
        if (action.payload.username && typeof window !== 'undefined') {
                localStorage.setItem(
                    'username',
                    action.payload.username)
        }
    }
    }
