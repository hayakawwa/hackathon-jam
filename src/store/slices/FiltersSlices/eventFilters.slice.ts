import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EventFiltersSchema} from "@/store/types/EventFiltersSchema";

const initialState: {data: EventFiltersSchema[]} = {
  data: [
    {id: 1, active: false, name: 'Дата'},
    {id: 2, active: false, name: 'Локация'},
    {id: 3, active: false, name: 'Формат'},
    {id: 4, active: false, name: 'Сфера'},
  ]
}

export const eventFiltersSlice = createSlice({
  name: 'eventFilters',
  initialState,
  reducers: {
    closeAll: (state) => {
      state.data.map(item => {
          item.active = false
        })
    },
    openCurrentFilter: (state, action: PayloadAction<EventFiltersSchema>) => {
      state.data
        .filter(item => item.id === action.payload.id)
        .map(item => {
          item.active = !item.active
        })
      state.data
        .filter(item => item.id !== action.payload.id)
        .map(item => {
          item.active = false
        })
    },
  }
})


export const { actions: eventFiltersActions } = eventFiltersSlice;
export const { reducer: eventFiltersReducer } = eventFiltersSlice;