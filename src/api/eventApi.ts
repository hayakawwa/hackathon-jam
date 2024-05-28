import {api} from "@/api/api";
import {EventSchema} from "@/store/types/EventSchema";

interface EventListBody {
  count: number
  page: number
}

// TODO: типизация
export const eventApi  = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<EventSchema[], EventListBody>({
      query: (parameters) => ({
        url: '/event/last',
        body: parameters,
        method: 'GET'
      })
    })
  })
});

export const {useGetEventsQuery} = eventApi;

export const {
  endpoints: {getEvents}
} = eventApi;