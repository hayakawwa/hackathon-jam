import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FilterItem {
  value?: string
  checked?: boolean
}

const initialState: {data: FilterItem[]} = {data: []}

export const activeFiltersSlice = createSlice({
  name: 'activeFilters',
  initialState,
  reducers: {
    activateFilter: (state, action: PayloadAction<FilterItem>) => {
      state.data
        .filter(item => item.value === action.payload.value)
        .map(item => item.checked = !item.checked)
    },
    removeFilterItem: (state, action: PayloadAction<FilterItem>) => {
      state.data
        .filter(item => item.value === action.payload.value)
        .map(item => {
          item.checked = false
        })
    },
    removeAll: (state) => {
      state.data
        .map(item => item.checked = false)
    },
    initializeItem: (state, action: PayloadAction<FilterItem>) => {
      state.data.filter(item => item.value === action.payload.value).length == 0
      && state.data.push((action.payload))
    }
  }
})


export const { actions: activeFiltersActions } = activeFiltersSlice;
export const { reducer: activeFiltersReducer } = activeFiltersSlice;