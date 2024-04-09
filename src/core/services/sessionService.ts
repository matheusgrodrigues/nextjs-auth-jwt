import { GetServerSidePropsContext } from 'next';

import { authUseCases } from '@/services/AuthService';

import tokenService from './tokenService';

const getSession = async (ctx?: GetServerSidePropsContext) => {
    const token = tokenService.get(ctx);

    try {
        const user = await authUseCases.me(token);

        return user;
    } catch (error) {
        throw error;
    }
};

export default getSession;
