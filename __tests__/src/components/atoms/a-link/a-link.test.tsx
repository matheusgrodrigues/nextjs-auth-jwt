import renderer from 'react-test-renderer';

// Atoms
import { A_Link } from '@/components/atoms/a-link/a-link';

describe('Deve renderizar os links corretamente', () => {
    it('Deve preservar a estrutura visual dos links', () => {
        const three = renderer.create(<A_Link href="/" label="texto do link" />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
