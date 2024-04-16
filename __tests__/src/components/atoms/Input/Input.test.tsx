import React from 'react';

import renderer from 'react-test-renderer';

import { Input } from '@/components/atoms';

it('Deve renderizar o Input corretamente.', () => {
    const getInput = renderer.create(<Input />).toJSON();

    expect(getInput).toMatchSnapshot();
});
