import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

// Molecules
import { M_CheckboxWithLabel } from '../../../../../src/components/molecules/m-checkbox-with-label/m-checkbox-with-label';

describe('Deve renderizar o m-checkbox-with-label, corretamente', () => {
    // ======================================

    it('Deve renderizar o a-checkbox', () => {
        // Arrange
        const a_label_text = '';

        render(<M_CheckboxWithLabel checked={false} labelText={a_label_text} />);

        // Act
        const get_a_checkbox = screen.getByTestId('a-checkbox');

        // Assert
        expect(get_a_checkbox).toBeInTheDocument();
        expect(get_a_checkbox).not.toBeChecked();
    });

    // ======================================

    it('Deve renderizar o a-label', () => {
        // Arrange
        const a_label_text = 'a-label';

        render(<M_CheckboxWithLabel checked={false} labelText={a_label_text} />);

        // Act
        const get_a_label = screen.getByTestId('a-label');

        // Assert
        expect(get_a_label).toBeInTheDocument();
        expect(get_a_label.textContent).not.toHaveLength(0);
    });

    // ======================================

    it('Deve manter a estrutura visual do componente', () => {
        const get_m_checkboxWithLabel = renderer
            .create(<M_CheckboxWithLabel checked={false} labelText="a-label" />)
            .toJSON();

        expect(get_m_checkboxWithLabel).toMatchSnapshot();
    });

    // ======================================
});
