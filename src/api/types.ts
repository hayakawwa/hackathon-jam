import {EventSchema} from "@/store/types/EventSchema";

export interface getEventsResponse {
  count: number
  events?: EventSchema[]
}

export interface joinEventBody {
  urid: string
  access_token: string
}

export interface exitEventBody {
  urid: string
  access_token: string
}

export interface getUserBody {
  urid: string
  skills_to_search: string[]
}

export interface User {
  email: string
  username: string
  avatar: string
  first_name: string
  last_name: string
  middle_name: string
  location: string
  skills: string[]
}

export interface getUsersResponse {
  users: User[]
}