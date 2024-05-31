import {EventFiltersSchema} from "@/store/types/EventFiltersSchema";
import {FilterItem} from "@/store/slices/FiltersSlices/activeFilters.slice";
import {ProfileSchema} from "@/store/types/ProfileSchema";

export interface StateSchema {
  profile: {data: ProfileSchema},
  eventFilters: {data: EventFiltersSchema[]}
  activeFilters: {data: FilterItem[]}
}