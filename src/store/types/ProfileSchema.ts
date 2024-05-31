export interface ProfileSchema {
    about?: string,
    avatar?: string,
    email?: string,
    first_name?: string,
    last_name?: string,
    location?: string,
    middle_name?: string,
    username?: string,
    work_place?: string,
    work_time?: string
}

export interface GetCurrentProfileSchema {
    access_token: string
}

export interface ProfileResponseSchema extends ProfileSchema {
    $schema?: string,
    permissions?: number
}

export interface ProfileBodySchema extends ProfileSchema, GetCurrentProfileSchema {}

export interface SkillsResponseSchema {
    $schema?: string,
    skills: string[],
}
