import {EventFiltersSchema} from "@/store/types/EventFiltersSchema";
import {FilterItem} from "@/store/slices/FiltersSlices/activeFilters.slice";

export interface StateSchema {
  eventFilters: {data: EventFiltersSchema[]}
  activeFilters: {data: FilterItem[]}
}