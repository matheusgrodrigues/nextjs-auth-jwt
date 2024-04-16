import React from 'react';

import renderer from 'react-test-renderer';

import { Icon } from '@/components/atoms';

describe('Deve renderizar os icones corretamente', () => {
    it('Deve preservar a estrutura visual do icone', () => {
        const three = renderer.create(<Icon icon="pi-lock" />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
