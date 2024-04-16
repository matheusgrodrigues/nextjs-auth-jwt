import React from 'react';

import renderer from 'react-test-renderer';

import { Label } from '@/components/atoms';

it('Deve renderizar o Label corretamente', () => {
    const getLabel = renderer.create(<Label>{''}</Label>).toJSON();

    expect(getLabel).toMatchSnapshot();
});
