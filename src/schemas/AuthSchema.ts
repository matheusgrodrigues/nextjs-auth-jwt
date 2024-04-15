export interface AuthCredentialSchema {
    identifier: string;
    password: string;
    manter_logado: boolean;
}

export interface AuthUserSchema {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponseSchema {
    jwt: string;
    user: AuthUserSchema;
}
