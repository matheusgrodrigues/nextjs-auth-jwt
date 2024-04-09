import renderer from 'react-test-renderer';

import Footer from '@/components/organism/Footer/Footer';

describe('Deve renderizar o footer corretamente', () => {
    it('Deve preservar a estrutura visual do footer', () => {
        const three = renderer
            .create(
                <Footer
                    name="matheusgomesdev"
                    site="https://matheusgomesdev.com.br"
                    github="https://github.com/matheusgrodrigues"
                    linkedin="https://www.linkedin.com/in/matheusgomes/"
                />
            )
            .toJSON();

        expect(three).toMatchSnapshot();
    });
});
