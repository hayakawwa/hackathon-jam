import {api} from "@/app/api/api";


// TODO: типизация
export const registerApi  = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData) => ({
                url: 'api/register',
                method: 'POST',
                body: userData,
            })
        })
    })
});

export const {useRegisterMutation} = registerApi;

export const {
    endpoints: {register}
} = registerApi;