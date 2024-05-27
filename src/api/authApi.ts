import {api} from "@/api/api";
import {UserRegisterBodySchema, UserAuthResponseSchema, UserLoginBodySchema} from "@/store/schemas/authSchema";


export const authApi  = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserAuthResponseSchema, UserLoginBodySchema>({
            query: (userData) => ({
                url: 'api/login',
                method: 'POST',
                body: userData,
            })
        }),
        register: builder.mutation<UserAuthResponseSchema, UserRegisterBodySchema>({
            query: (userData) => ({
                url: 'api/register',
                method: 'POST',
                body: userData,
            })
        })
    })
});

export const {useLoginMutation, useRegisterMutation} = authApi;

export const {
    endpoints: {login, register}
} = authApi;