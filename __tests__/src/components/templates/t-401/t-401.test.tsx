import renderer from 'react-test-renderer';

// Template
import { T_401 } from '@/components/templates/t-401/t-401';

describe('Deve renderizar o template 401 corretamente', () => {
    it('Deve preservar a estrutura do template 401', () => {
        const three = renderer.create(<T_401 handleLogin={() => null} />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
