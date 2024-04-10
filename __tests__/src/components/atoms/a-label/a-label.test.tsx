import renderer from 'react-test-renderer';

// Atoms
import { A_Label } from '../../../../../src/components/atoms/Label/Label';

it('Deve renderizar o a-label corretamente', () => {
    const get_a_label = renderer.create(<A_Label>{''}</A_Label>).toJSON();

    expect(get_a_label).toMatchSnapshot();
});
