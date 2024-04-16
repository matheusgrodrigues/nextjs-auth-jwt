import { AuthCredentialSchema, AuthResponseSchema } from '@/schemas/AuthSchema';

export const mockLoginEmptyResponse: AuthResponseSchema = {
    jwt: '',
    user: {
        id: 0,
        username: '',
        email: '',
        provider: '',
        confirmed: false,
        blocked: false,
        createdAt: '',
        updatedAt: '',
    },
};
