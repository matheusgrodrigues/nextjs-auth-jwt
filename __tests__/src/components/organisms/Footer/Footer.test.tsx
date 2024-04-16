import React from 'react';

import renderer from 'react-test-renderer';

import Footer from '@/components/organism/Footer/Footer';

describe('Deve renderizar o footer corretamente', () => {
    it('Deve preservar a estrutura visual do footer', () => {
        const three = renderer.create(<Footer />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
