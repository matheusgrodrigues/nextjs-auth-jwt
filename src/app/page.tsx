'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import { SessionHOCProps, withSessionHOC } from '@/core/utils/hoc/sessionHOC';

import { Button, Text, Title, Icon } from '@/components/atoms';
import { BlockUI, Header, Footer } from '@/components/organism';
import { CheckboxWithLabel, InputWithLabel, Toast } from '@/components/molecules';
import { ToastRef } from '@/components/molecules/Toast/Toast';

import { messages } from '@/config';

import { authUseCases } from '@/services/AuthService';

interface InitialValuesProps {
    email: string;
    password: string;
    manter_logado: boolean;
}

interface HandleLoginProps {
    values: InitialValuesProps;
    setSubmitting: (isSubmitting: boolean) => void;
    mToastRef: React.RefObject<ToastRef>;
    router: AppRouterInstance;
}

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
    const { session } = data;

    const router = useRouter();

    const toastRef = useRef<ToastRef>(null);

    const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

    const handleLogin = useCallback(async ({ values, setSubmitting, mToastRef, router }: HandleLoginProps) => {
        const { manter_logado, password, email } = values;

        setSubmitting(true);

        const life = 3000;

        try {
            await authUseCases.login({
                identifier: email,
                password,
                manter_logado,
            });

            setSubmitting(false);

            if (mToastRef && mToastRef.current) {
                mToastRef.current.showToast({
                    severity: 'success',
                    summary: messages.login.TOAST.SUCCESS_TITLE,
                    detail: messages.login.TOAST.REDIRECT_MESSAGE,
                    life,
                });
            }

            setTimeout(() => router.push('/welcome'), life);
        } catch {
            setSubmitting(false);

            if (mToastRef && mToastRef.current) {
                mToastRef.current.showToast({
                    severity: 'error',
                    summary: messages.login.TOAST.ERROR_TITLE,
                    detail: messages.login.ERROR_MESSAGES.INVALID_EMAIL_PASSWORD,
                    life,
                });
            }
        }
    }, []);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required(messages.login.ERROR_MESSAGES.INVALID_EMAIL_EMPTY)
            .email(messages.login.ERROR_MESSAGES.INVALID_EMAIL),
        password: Yup.string()
            .required(messages.login.ERROR_MESSAGES.INVALID_PASSWORD_EMPTY)
            .min(4, messages.login.ERROR_MESSAGES.INVALID_PASSWORD_MIN_LENGTH),
    });

    const { getFieldProps, isSubmitting, handleSubmit, touched, errors, values } = useFormik({
        validationSchema,
        validateOnChange: false,
        validateOnBlur: true,
        initialValues: {
            email: 'admin@matheusgomesdev.com.br',
            password: '123456',
            manter_logado: false,
        },
        onSubmit: (values, { setSubmitting }) => handleLogin({ setSubmitting, mToastRef: toastRef, values, router }),
    });

    return (
        <>
            <main data-testid="p-home" className={'p_home'}>
                <Header image="https://github.com/matheusgrodrigues" link="/images/a-avatar.jpeg" />

                <div data-testid="loginTitle" className={'loginTitle'}>
                    <Icon icon="pi-lock" />
                    <Title variant="h2">{'Acesse sua conta'}</Title>
                    <Text variant="fwReg-fs16-gray500">
                        Estamos felizes em vê-lo novamente! Insira suas credenciais para entrar.
                    </Text>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className={'o_form_login'}
                    data-testid="o-login-form"
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <InputWithLabel
                        labelText="Email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        {...getFieldProps('email')}
                    />

                    {errors.email && touched.email && <Text variant="error">{errors.email}</Text>}

                    <InputWithLabel
                        labelText="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        {...getFieldProps('password')}
                    />

                    {errors.password && touched.password && <Text variant="error">{errors.password}</Text>}

                    <CheckboxWithLabel
                        checked={values.manter_logado}
                        labelText="Mantenha-me conectado."
                        {...getFieldProps('manter_logado')}
                    />

                    <Button variant="gradient" type="submit" loading={isSubmitting}>
                        {isSubmitting ? '' : 'Entrar'}
                    </Button>
                </form>

                <Footer
                    github="https://github.com/matheusgrodrigues/nextjs-auth-jwt"
                    linkedin="https://www.linkedin.com/in/matheusgomes/"
                    name="matheusgomesdev"
                    site="https://matheusgomesdev.com.br"
                />
            </main>

            <Toast ref={toastRef} position="bottom-center" />

            {showBlockUI && <BlockUI blocked={showBlockUI} fullScreen />}
        </>
    );
}

export default withSessionHOC(Home);
