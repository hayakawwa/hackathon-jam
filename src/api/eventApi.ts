import {api} from "@/api/api";
import {EventSchema} from "@/store/types/EventSchema";

interface getEventsResponse {
  count: number
  events?: EventSchema[]
}

// TODO: типизация
export const eventApi  = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<getEventsResponse, void>({
      query: () => 'api/events/last'
    }),
    getEventByName: builder.query<EventSchema, string>({
      query: (urid: string) => `/api/event/${urid}`
    })
  })
});

export const {useGetEventsQuery, useGetEventByNameQuery} = eventApi;

export const {
  endpoints: {getEvents, getEventByName}
} = eventApi;