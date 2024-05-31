import {api} from "@/api/api";
import {EventSchema} from "@/store/types/EventSchema";
import {exitEventBody, getEventsResponse, getUserBody, getUsersResponse, joinEventBody, User} from "@/api/types";


// TODO: типизация
export const eventApi  = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<getEventsResponse, void>({
      query: () => 'api/events/last'
    }),
    getEventByName: builder.query<EventSchema, string>({
      query: (urid: string) => `/api/event/${urid}`
    }),
    createEvent: builder.mutation({
      query: (data) => ({
        url: 'api/event/create',
        body: data,
        method: 'POST'
      })
    }),
    joinEvent: builder.mutation({
      query: (body: joinEventBody) => ({
        url: `api/event/${body.urid}/join`,
        body: {access_token: body.access_token},
        method: 'POST'
      })
    }),
    getUsers: builder.mutation<getUsersResponse, getUserBody>({
      query: (body: getUserBody) => ({
        url: `api/event/${body.urid}/search-member`,
        body: {skills_to_search: []},
        method: 'POST'
      })
    }),
    exitEvent: builder.mutation({
      query: (body: exitEventBody) => ({
        url: `api/event/${body.urid}/exit`,
        body: {access_token: body.access_token},
        method: 'POST'
      })
    }),
  })
});

export const {useGetEventsQuery, useGetEventByNameQuery
  , useCreateEventMutation, useJoinEventMutation, useGetUsersMutation, useExitEventMutation} = eventApi;

export const {
  endpoints: {getEvents, getEventByName}
} = eventApi;