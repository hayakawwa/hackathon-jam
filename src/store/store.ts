import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {eventFiltersReducer} from "@/store/slices/FiltersSlices/eventFilters.slice";
import {activeFiltersReducer} from "@/store/slices/FiltersSlices/activeFilters.slice";

const rootReducer = combineReducers({
  eventFilters: eventFiltersReducer,
  activeFilters: activeFiltersReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

