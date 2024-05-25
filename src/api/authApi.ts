import {api} from "@/api/api";


// TODO: типизация
export const autnApi  = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userData) => ({
                url: 'api/login',
                method: 'POST',
                body: userData,
            })
        })
    })
});

export const {useLoginMutation} = autnApi;

export const {
    endpoints: {login}
} = autnApi;