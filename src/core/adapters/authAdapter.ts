import { AxiosResponse } from 'axios';

import AuthPortProps from '../ports/authPort';

import httpMiddleware from '../middleware/HttpMiddleware';

import { AuthResponseSchema, AuthUserSchema } from '@/schemas/AuthSchema';

const authAdapter: AuthPortProps = {
    login: async ({ identifier, password }) => {
        const method = 'POST';

        const url = 'api/auth/local';

        try {
            const response: AxiosResponse<AuthResponseSchema> = await httpMiddleware({
                method,
                url,
                body: {
                    identifier,
                    password,
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
    me: async (token: string) => {
        const method = 'GET';

        const url = 'api/users/me';

        try {
            const response: AxiosResponse<AuthUserSchema> = await httpMiddleware({ method, url, token });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default authAdapter;
