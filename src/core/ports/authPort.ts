import { I_AuthCredentialsEntity, I_AuthResponseEntity, I_AuthUserEntity } from '@/schemas/AuthSchema';

export interface I_AuthPort {
    login: (body: I_AuthCredentialsEntity) => Promise<I_AuthResponseEntity>;
    me: (token: string) => Promise<I_AuthUserEntity>;
}
