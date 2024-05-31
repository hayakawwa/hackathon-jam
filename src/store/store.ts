import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {eventFiltersReducer} from "@/store/slices/FiltersSlices/eventFilters.slice";
import {activeFiltersReducer} from "@/store/slices/FiltersSlices/activeFilters.slice";
import {api} from "@/api/api";
import {listenerMiddleware} from "@/store/models/auth";
import {authApi} from "@/api/authApi";
import {profileReducer} from "@/store/slices/profile.slice";
import {authReducer} from "@/store/slices/auth.slice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  profile: profileReducer,
  eventFilters: eventFiltersReducer,
  activeFilters: activeFiltersReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat(api.middleware)
          .concat(authApi.middleware)
          .prepend(listenerMiddleware.middleware)
  });
};

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

