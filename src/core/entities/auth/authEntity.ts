export interface I_AuthCredentialsEntity {
  identifier: string;
  password: string;
  manter_logado: boolean
}

export interface I_AuthUserEntity {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface I_AuthResponseEntity {
  jwt: string;
  user: I_AuthUserEntity;
}
