import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Checkbox } from '@/components/atoms';

describe('Deve renderizar o Checkbox corretamente', () => {
    it('Deve renderizar o Checkbox na tela', () => {
        render(<Checkbox checked={false} data-testid="checkbox-testid" />);

        const getCheckbox = screen.getByTestId('checkbox-testid');

        expect(getCheckbox).toBeInTheDocument();
    });
});
