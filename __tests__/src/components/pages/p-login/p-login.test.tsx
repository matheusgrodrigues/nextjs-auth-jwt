import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { mockLoginResponse } from '../../../../../__mocks__/src/services/auth/authService';
import { AppRouterContextProviderMock } from '@/core/utils/test-utils/app-router-ctx-provider';

import Home from '@/app/page';

describe('Deve renderizar a pagina de login, corretamente', () => {
    const handleLoginForm = jest.fn();
    const push = jest.fn();

    const o_headerProps = {
        link: 'https://github.com/matheusgrodrigues',
        image: '/images/a-avatar.jpeg',
    };

    const o_loginTitle = {
        image: '/images/a-avatar.jpeg',
        title: 'Acesse sua conta',
        userSession: { data: { session: mockLoginResponse.user }, error: false, loading: false },
    };

    const t_loginProps = {
        o_loginTitle,
        handleLoginForm,
    };

    const o_footerProps = {
        name: 'matheusgomesdev',
        site: 'https://matheusgomesdev.com.br',
        github: 'https://github.com/matheusgrodrigues',
        linkedin: 'https://www.linkedin.com/in/matheusgomes/',
    };

    beforeEach(() => {
        render(
            <AppRouterContextProviderMock router={{ push }}>
                <Home
                    o_headerProps={o_headerProps}
                    t_loginProps={{
                        o_loginTitle,
                        handleLoginForm,
                    }}
                    o_footerProps={o_footerProps}
                />
            </AppRouterContextProviderMock>
        );
    });
    it('Deve renderizar o t-login', () => {
        const get_t_login = screen.getByTestId('t-login');

        expect(get_t_login).toBeInTheDocument();
    });

    it('Deve preservar a estrutura visual da p-login', () => {
        const get_p_login = renderer
            .create(
                <AppRouterContextProviderMock router={{ push }}>
                    <Home
                        o_headerProps={o_headerProps}
                        t_loginProps={{
                            o_loginTitle,
                            handleLoginForm,
                        }}
                        o_footerProps={o_footerProps}
                    />
                </AppRouterContextProviderMock>
            )
            .toJSON();

        expect(get_p_login).toMatchSnapshot();
    });
    // ============================================
});
