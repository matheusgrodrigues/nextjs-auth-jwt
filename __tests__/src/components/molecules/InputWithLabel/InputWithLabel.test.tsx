import React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { InputWithLabel } from '@/components/molecules';

import BaseForm from '@/core/components/Form/Form';

describe('Deve renderizar o InputWithLabel corretamente.', () => {
    it('Deve renderizar o InputWithLabel na tela.', () => {
        render(
            <BaseForm initialValues={{}} onSubmit={() => {}}>
                <InputWithLabel labelText="Email" name="email" type="email" />
            </BaseForm>
        );

        const getInputWithLabel = screen.getByTestId('input-with-label-email-testid');

        expect(getInputWithLabel).toBeInTheDocument();
    });

    it('Deve renderizar o Label com o texto.', () => {
        render(
            <BaseForm initialValues={{}} onSubmit={() => {}}>
                <InputWithLabel labelText="Email" name="email" type="email" />
            </BaseForm>
        );

        const getLabel = screen.getByTestId('label-email-testid');

        expect(getLabel).toBeInTheDocument();
        expect(getLabel.textContent).not.toHaveLength(0);
    });

    it('Deve renderizar o campo input.', () => {
        render(
            <BaseForm initialValues={{}} onSubmit={() => {}}>
                <InputWithLabel labelText="Email" name="email" type="email" />
            </BaseForm>
        );

        const getInput = screen.getByTestId('input-email-testid');

        expect(getInput).toBeInTheDocument();
        expect(getInput).toHaveProperty('type');
        expect(getInput).toHaveProperty('name');
    });

    it('Deve preservar a estrutura visual do componente.', () => {
        const getInputWithLabel = renderer
            .create(
                <BaseForm initialValues={{}} onSubmit={() => {}}>
                    <InputWithLabel labelText="Email" name="email" type="email" />
                </BaseForm>
            )
            .toJSON();

        expect(getInputWithLabel).toMatchSnapshot();
    });
});
