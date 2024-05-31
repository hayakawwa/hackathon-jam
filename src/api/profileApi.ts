import {api} from "@/api/api";
import {GetCurrentProfileSchema, ProfileBodySchema, ProfileResponseSchema} from "@/store/types/ProfileSchema";

export const profileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCurrentProfile: builder.mutation<ProfileResponseSchema, GetCurrentProfileSchema>({
            query: (accessToken) => ({
                url: 'api/profile',
                method: 'POST',
                body: accessToken
            }),
        }),
        getProfile: builder.query<ProfileResponseSchema, string>({
            query: (username: string) => `/api/profile/${username}`
        }),
        editProfile: builder.mutation<ProfileResponseSchema, ProfileBodySchema>({
            query: (profileData) => ({
                url: 'api/profile',
                method: 'PATCH',
                body: profileData
            }),
        })
    })
});

export const {
    useEditProfileMutation,
    useGetCurrentProfileMutation,
    useGetProfileQuery
} = profileApi

export const {
    endpoints: {getCurrentProfile, getProfile, editProfile}
} = profileApi