import { I_AuthCredentialsEntity, I_AuthResponseEntity, I_AuthUserEntity } from '@/schemas/AuthSchema';

interface I_AuthPort {
    login: (body: I_AuthCredentialsEntity) => Promise<I_AuthResponseEntity>;
    me: (token: string) => Promise<I_AuthUserEntity>;
}

export default I_AuthPort;
