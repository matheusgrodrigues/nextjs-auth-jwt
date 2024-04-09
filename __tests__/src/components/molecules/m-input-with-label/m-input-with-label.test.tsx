import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

// Molecules
import { M_InputWithLabel } from '../../../../../src/components/molecules/m-input-with-label/m-input-with-label';

describe('Deve renderizar o m-input-with-label corretamente', () => {
    // ======================================================================
    it('Deve renderizar o a-label com o texto', () => {
        // Arrange
        const a_label_text = 'a-label';

        render(<M_InputWithLabel labelText={a_label_text} type="email" name="email" placeholder="" />);

        // Act
        const get_a_label = screen.getByTestId('a-label');

        // Assert
        expect(get_a_label).toBeInTheDocument();
        expect(get_a_label.textContent).not.toHaveLength(0);
    });

    // ======================================================================

    it('Deve renderizar o a-input corretamente', () => {
        // Arrange
        const a_label_text = 'a-label';

        render(<M_InputWithLabel labelText={a_label_text} type="email" name="email" placeholder="" />);

        // Act
        const get_a_input = screen.getByTestId('a-input-email');

        // Assert
        expect(get_a_input).toBeInTheDocument();

        expect(get_a_input).toHaveProperty('type');
        expect(get_a_input.getAttribute('type')).not.toHaveLength(0);

        expect(get_a_input).toHaveProperty('name');
        expect(get_a_input.getAttribute('name')).not.toHaveLength(0);
    });

    // ======================================================================

    it('Deve preservar a estrutura visual do componente', () => {
        const a_label_text = 'a-label';

        const get_m_input_with_label = renderer
            .create(<M_InputWithLabel labelText={a_label_text} type="email" name="email" placeholder="" />)
            .toJSON();

        expect(get_m_input_with_label).toMatchSnapshot();
    });

    // ======================================================================
});
