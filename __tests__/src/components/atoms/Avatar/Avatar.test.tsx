import React from 'react';

import renderer from 'react-test-renderer';

import { Avatar } from '@/components/atoms';

describe('Deve renderizar o Avatar corretamente', () => {
    it('Deve preservar a estrutura visual do componente', () => {
        const getAvatar = renderer.create(<Avatar label="" image="" size="normal" shape="circle" />).toJSON();

        expect(getAvatar).toMatchSnapshot();
    });
});
