import {api} from "@/api/api";
import {EventSchema} from "@/store/types/EventSchema";

interface getEventsResponse {
  count: number
  events?: EventSchema[]
}


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
    })
  })
});

export const {useGetEventsQuery, useGetEventByNameQuery, useCreateEventMutation} = eventApi;

export const {
  endpoints: {getEvents, getEventByName}
} = eventApi;