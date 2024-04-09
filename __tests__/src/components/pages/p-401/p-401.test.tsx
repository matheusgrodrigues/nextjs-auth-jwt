import renderer from 'react-test-renderer';

import { P_401 } from '@/components/pages/p-401/p-401';

describe('Deve renderizar a pagina 401 corretamenta', () => {
    const o_headerProps = {
        link: 'https://github.com/matheusgrodrigues',
        image: '/images/a-avatar.jpeg',
    };

    const o_footerProps = {
        name: 'matheusgomesdev',
        site: 'https://matheusgomesdev.com.br',
        github: 'https://github.com/matheusgrodrigues',
        linkedin: 'https://www.linkedin.com/in/matheusgomes/',
    };

    it('Deve preservar a estrutura da pagina p-401', () => {
        const three = renderer.create(
            <P_401
                o_headerProps={o_headerProps}
                t_401Props={{
                    handleLogin: () => null,
                }}
                o_footerProps={o_footerProps}
            />
        );

        expect(three).toMatchSnapshot();
    });
});
