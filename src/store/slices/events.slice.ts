import {createSlice} from "@reduxjs/toolkit";
import {EventSchema} from "@/store/types/EventSchema";

const initialState: EventSchema[] = []

export const eventsSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload)
    },
  }
})

export const { actions: eventsActions } = eventsSlice;
export const { reducer: eventsReducer } = eventsSlice;