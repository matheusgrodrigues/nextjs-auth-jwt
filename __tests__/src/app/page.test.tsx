import React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AppRouterContextProviderMock } from '@/core/utils/test-utils/app-router-ctx-provider';

// import { AuthResponseSchema } from '@/schemas/AuthSchema';

import Home from '@/app/page';

/*
const mockLoginResponse: AuthResponseSchema = {
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk3MTE1NzMxLCJleHAiOjE2OTk3MDc3MzF9.EmMz1jdfjdLB-F35CoRkSPaj71dBbwVTb3QEjxclmS8',
    user: {
        id: 1,
        username: 'topete',
        email: 'topete.matheus@gmail.com',
        provider: 'local',
        confirmed: true,
        blocked: false,
        createdAt: '2023-10-11T17:46:26.944Z',
        updatedAt: '2023-10-11T22:31:06.753Z',
    },
}; */

describe('Deve renderizar a pagina de login, corretamente.', () => {
    const push = jest.fn();

    beforeEach(() => {
        render(
            <AppRouterContextProviderMock router={{ push }}>
                <Home />
            </AppRouterContextProviderMock>
        );
    });

    it('Deve preservar a estrutura visual da pagina de login.', () => {
        const pageLogin = renderer
            .create(
                <AppRouterContextProviderMock router={{ push }}>
                    <Home />
                </AppRouterContextProviderMock>
            )
            .toJSON();

        expect(pageLogin).toMatchSnapshot();
    });

    describe('Deve renderizar o formulário de login corretamente.', () => {
        it('Deve renderizar o Formulario.', () => {
            const getLoginForm = screen.getByTestId('page-login-form-testid');

            expect(getLoginForm).toBeInTheDocument();
        });

        it('Deve renderizar o campo E-mail.', () => {
            const getFieldEmail = screen.getByTestId('input-with-label-email-testid');

            expect(getFieldEmail).toBeInTheDocument();
        });

        it('Deve renderizar o campo Senha.', () => {
            const getFieldPassword = screen.getByTestId('input-with-label-password-testid');

            expect(getFieldPassword).toBeInTheDocument();
        });
    });
});
