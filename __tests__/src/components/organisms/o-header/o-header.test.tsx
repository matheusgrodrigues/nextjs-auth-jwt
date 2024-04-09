import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Header from '@/components/organism/Header/Header';

describe('Deve renderizar o Header corretamente', () => {
    it('Deve renderizar o a-avatar, corretamente', () => {
        render(<Header link="" image="" />);

        const get_a_avatar = screen.getByTestId('a-avatar');

        expect(get_a_avatar).toBeInTheDocument();
    });

    it('Deve preservar a estrutura visual do componente', () => {
        const three = renderer.create(<Header link="" image="/images/avatar.jpeg" />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
