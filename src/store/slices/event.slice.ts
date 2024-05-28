import {createSlice} from "@reduxjs/toolkit";
import {EventSchema} from "@/store/types/EventSchema";

const initialState: EventSchema[] = []

export const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {

  }
})