import { AuthCredentialSchema, AuthResponseSchema, AuthUserSchema } from '@/schemas/AuthSchema';

interface AuthPortProps {
    login: (body: AuthCredentialSchema) => Promise<AuthResponseSchema>;
    me: (token: string) => Promise<AuthUserSchema>;
}

export default AuthPortProps;
