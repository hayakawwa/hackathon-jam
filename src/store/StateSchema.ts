import {EventFiltersSchema} from "@/store/types/EventFiltersSchema";
import {FilterItem} from "@/store/slices/FiltersSlices/activeFilters.slice";
import {EventSchema} from "@/store/types/EventSchema";

export interface StateSchema {
  eventFilters: {data: EventFiltersSchema[]}
  activeFilters: {data: FilterItem[]}
  events: EventSchema[]
}