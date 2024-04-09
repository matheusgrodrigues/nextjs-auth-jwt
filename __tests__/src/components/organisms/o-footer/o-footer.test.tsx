import renderer from 'react-test-renderer';

// Organism
import { O_Footer } from '@/components/organism/Footer/o-footer';

describe('Deve renderizar o footer corretamente', () => {
    it('Deve preservar a estrutura visual do footer', () => {
        const three = renderer
            .create(
                <O_Footer
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
