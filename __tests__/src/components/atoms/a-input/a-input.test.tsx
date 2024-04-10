import renderer from 'react-test-renderer';

// Atoms
import { A_Input } from '../../../../../src/components/atoms/Input/Input';

it('Deve renderizar o a-input corretamente.', () => {
    const get_input = renderer.create(<A_Input />).toJSON();

    expect(get_input).toMatchSnapshot();
});
