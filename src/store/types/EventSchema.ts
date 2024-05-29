export interface OrganisatorsSchema {
  "email": string,
  "username": string
}

export interface EventSchema {
  end_time?: string
  start_time?: string
  icon?: string
  "requirements": string
  "prize": string,
  is_irl?: boolean
  location?: string
  name?: string
  urid?: string
  desc?: string
  tags?: string[]
  organisators?: OrganisatorsSchema[],
  partners?: string[]
  team_requirements_type?: number
  team_requirements_value?: number
}