import React from 'react';

import renderer from 'react-test-renderer';

import { Button } from '@/components/atoms';

describe('Deve renderizar o Button corretamente', () => {
    it('Deve preservar a estrutura visual do botão', () => {
        const getButton = renderer.create(<Button variant="fwMd-fs16-colGray700-bgWhite">Button</Button>).toJSON();

        expect(getButton).toMatchSnapshot();
    });
});
