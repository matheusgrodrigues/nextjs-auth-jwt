import { AxiosResponse } from 'axios';

import I_AuthPort from '../ports/authPort';

import httpInfra from '../middleware/HttpMiddleware';

import { I_AuthResponseEntity, I_AuthUserEntity } from '@/schemas/AuthSchema';

const authAdapter: I_AuthPort = {
    login: async ({ identifier, password }) => {
        const method = 'POST';

        const url = `${process.env.STRAPI_API_URL}/auth/local`;

        try {
            const response: AxiosResponse<I_AuthResponseEntity> = await httpInfra({
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

        const url = `${process.env.STRAPI_API_URL}/users/me`;

        try {
            const response: AxiosResponse<I_AuthUserEntity> = await httpInfra({ method, url, token });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default authAdapter;
