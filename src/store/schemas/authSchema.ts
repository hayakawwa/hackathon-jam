export interface UserRegisterBodySchema {
    email?: string,
    first_name?: string,
    is_organisator?: boolean,
    last_name?: string,
    password?: string,
    username?: string
}

export interface UserLoginBodySchema {
    email?: string,
    username?: string
}

export interface UserAuthResponseSchema {
    $schema?: string,
    access_token?: string,
    email?: string,
    username?: string
}