import React from 'react';

import renderer from 'react-test-renderer';

import { Link } from '@/components/atoms';

describe('Deve renderizar os links corretamente', () => {
    it('Deve preservar a estrutura visual dos links', () => {
        const three = renderer.create(<Link href="/">texto do link</Link>).toJSON();

        expect(three).toMatchSnapshot();
    });
});
