'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import useTranslation from '@/core/hooks/useTranslation';

import { messages } from '@/config';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import Toast, { ToastRef } from '@/core/components/Toast/Toast';
import BlockUI from '@/core/components/BlockUI/BlockUI';

import { Button, Text, Title, Icon } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';
import { CheckboxWithLabel, InputWithLabel } from '@/components/molecules';

import { authUseCases } from '@/services/AuthService';
import Form from '@/core/components/Form/Form';
import BaseForm from '@/core/components/Form/Form';

interface InitialValuesProps {
    email: string;
    password: string;
    manter_logado: boolean;
}

interface HandleLoginProps {
    values: InitialValuesProps;
    setSubmitting: (isSubmitting: boolean) => void;
    toastRef: React.RefObject<ToastRef>;
    router: AppRouterInstance;
}

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
    const { session } = data;

    const router = useRouter();

    const toastRef = useRef<ToastRef>(null);

    const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

    const { t } = useTranslation();

    const handleLogin = useCallback(async ({ setSubmitting, toastRef, values, router }: HandleLoginProps) => {
        const { manter_logado, password, email } = values;

        setSubmitting(true);

        try {
            await authUseCases.login({
                identifier: email,
                password,
                manter_logado,
            });

            setSubmitting(false);

            toastRef.current?.showToast({
                severity: 'success',
                summary: messages.login.TOAST.SUCCESS_TITLE,
                detail: messages.login.TOAST.REDIRECT_MESSAGE,
            });

            setTimeout(() => router.push('/welcome'), 3000);
        } catch {
            setSubmitting(false);

            toastRef.current?.showToast({
                severity: 'error',
                summary: messages.login.TOAST.ERROR_TITLE,
                detail: messages.login.ERROR_MESSAGES.INVALID_EMAIL_PASSWORD,
            });
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
        onSubmit: (values, { setSubmitting }) => handleLogin({ setSubmitting, toastRef, values, router }),
    });

    return (
        <>
            <main data-testid="page-login" className="page-login">
                <Header />

                <BaseForm />

                <div className="page-login__form">
                    <div data-testid="page-login-title-testid" className="page-login__form_title">
                        <Icon icon="pi-lock" />
                        <Title variant="h2">{t('specific.home.label.title')}</Title>
                        <Text variant="fwReg-fs16-gray500">{t('specific.home.label.description')}</Text>
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
                            placeholder={t('specific.home.inputLabel.email')}
                            {...getFieldProps('email')}
                        />

                        {errors.email && touched.email && <Text variant="error">{errors.email}</Text>}

                        <InputWithLabel
                            labelText="Senha"
                            type="password"
                            placeholder={t('specific.home.inputLabel.senha')}
                            {...getFieldProps('password')}
                        />

                        {errors.password && touched.password && <Text variant="error">{errors.password}</Text>}

                        <CheckboxWithLabel
                            checked={values.manter_logado}
                            labelText={`${t('specific.home.inputLabel.manterConectado')}`}
                            {...getFieldProps('manter_logado')}
                        />

                        <Button variant="gradient" type="submit" loading={isSubmitting}>
                            {isSubmitting ? '' : 'Entrar'}
                        </Button>
                    </form>
                </div>

                <Footer />
            </main>

            <Toast ref={toastRef} position="bottom-center" />

            {showBlockUI && <BlockUI blocked={showBlockUI} fullScreen />}
        </>
    );
}

export default withSessionHOC(Home);
