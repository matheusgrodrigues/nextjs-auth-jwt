import React from 'react';

import renderer from 'react-test-renderer';

import { Text } from '@/components/atoms';

describe('Deve renderizar o Text, corretamente', () => {
    it('Deve preservar a estrutura visual do Text', () => {
        const getText = renderer.create(<Text variant="fwSb-fs16-primary">Text</Text>).toJSON();

        expect(getText).toMatchSnapshot();
    });
});
