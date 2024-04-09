import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

// Interfaces
import { I_OLoginTitle } from '@/components/organism/o-login-title/o-login-title';

// Pages
import { P_Home } from '../../../../../src/components/pages/p-login/p-login';

// Utils
import { AppRouterContextProviderMock } from '@/core/utils/test-utils';
import { I_OHeader } from '@/components/organism/header/o-header';
import { mockLoginResponse } from '../../../../../__mocks__/src/services/auth/authService';
import { I_TLogin } from '@/components/templates/Login/t-login';

describe('Deve renderizar a pagina de login, corretamente', () => {
    const handleLoginForm = jest.fn();
    const push = jest.fn();

    // Organism: Header
    const o_headerProps: I_OHeader = {
        link: 'https://github.com/matheusgrodrigues',
        image: '/images/a-avatar.jpeg',
    };

    // Organism: LoginTitle
    const o_loginTitle: I_OLoginTitle = {
        image: '/images/a-avatar.jpeg',
        title: 'Acesse sua conta',
        userSession: { data: { session: mockLoginResponse.user }, error: false, loading: false },
    };

    // Template: LoginForm
    const t_loginProps: I_TLogin = {
        o_loginTitle,
        handleLoginForm,
    };

    // Organism: Footer
    const o_footerProps = {
        name: 'matheusgomesdev',
        site: 'https://matheusgomesdev.com.br',
        github: 'https://github.com/matheusgrodrigues',
        linkedin: 'https://www.linkedin.com/in/matheusgomes/',
    };

    beforeEach(() => {
        render(
            <AppRouterContextProviderMock router={{ push }}>
                <P_Home
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
    // ============================================
    it('Deve renderizar o t-login', () => {
        // Arrange -: beforeEach

        // Act
        const get_t_login = screen.getByTestId('t-login');

        // Assert
        expect(get_t_login).toBeInTheDocument();
    });
    // ============================================

    it('Deve preservar a estrutura visual da p-login', () => {
        const get_p_login = renderer
            .create(
                <AppRouterContextProviderMock router={{ push }}>
                    <P_Home
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
