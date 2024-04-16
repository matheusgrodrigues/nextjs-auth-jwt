import React from 'react';

import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';

import { Checkbox } from '@/components/atoms';

describe('Deve renderizar o Checkbox corretamente', () => {
    it('Deve renderizar o Checkbox na tela', () => {
        const getCheckbox = renderer.create(<Checkbox checked={false} data-testid="checkbox-testid" />).toJSON();

        expect(getCheckbox).toMatchSnapshot();
    });
});
