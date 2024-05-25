import {StateSchema} from "@/store/StateSchema";

export const getFiltersData = (state: StateSchema) =>
  state.eventFilters.data

export const getActiveFilters = (state: StateSchema) =>
  state.activeFilters.data