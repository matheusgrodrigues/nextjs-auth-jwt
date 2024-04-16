import React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import BaseForm from '@/core/components/Form/Form';

import { CheckboxWithLabel } from '@/components/molecules';

describe('Deve renderizar o CheckboxWithLabel, corretamente.', () => {
    it('Deve renderizar o Checkbox.', () => {
        render(
            <BaseForm initialValues={{}} onSubmit={() => {}}>
                <CheckboxWithLabel labelText="" checked={false} name="manter_logado" />
            </BaseForm>
        );

        const getCheckbox = screen.getByTestId('label-manter_logado-testid');

        expect(getCheckbox).toBeInTheDocument();
    });

    it('Deve renderizar o Label', () => {
        render(
            <BaseForm initialValues={{}} onSubmit={() => {}}>
                <CheckboxWithLabel labelText="" checked={false} name="manter_logado" />
            </BaseForm>
        );

        const getLabel = screen.getByTestId('label-manter_logado-testid');

        expect(getLabel).toBeInTheDocument();
    });

    it('Deve manter a estrutura visual do componente', () => {
        const getCheckboxWithLabel = renderer
            .create(
                <BaseForm initialValues={{}} onSubmit={() => {}}>
                    <CheckboxWithLabel labelText="" checked={false} name="manter_logado" />
                </BaseForm>
            )
            .toJSON();

        expect(getCheckboxWithLabel).toMatchSnapshot();
    });
});
