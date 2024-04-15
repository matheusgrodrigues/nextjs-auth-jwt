'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FormikHelpers, FormikValues, useFormikContext } from 'formik';

import * as Yup from 'yup';

import useTranslation from '@/core/hooks/useTranslation';

import { messages } from '@/config';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import Toast, { ToastRef } from '@/core/components/Toast/Toast';
import BlockUI from '@/core/components/BlockUI/BlockUI';
import BaseForm from '@/core/components/Form/Form';

import { Button, Text, Title, Icon, ButtonRef } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';
import { CheckboxWithLabel, InputWithLabel } from '@/components/molecules';

import { authUseCases } from '@/services/AuthService';

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
    const { session } = data;

    const router = useRouter();

    const toastRef = useRef<ToastRef>(null);
    const btnSubmitRef = useRef<ButtonRef>(null);

    const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

    const { t } = useTranslation();

    const handleLogin = useCallback(async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        const { manter_logado, password, email } = values;

        actions.setSubmitting(true);
        btnSubmitRef.current?.setLoading(true);

        try {
            await authUseCases.login({
                identifier: email,
                password,
                manter_logado,
            });

            actions.setSubmitting(false);
            btnSubmitRef.current?.setLoading(false);

            toastRef.current?.showToast({
                severity: 'success',
                summary: messages.login.TOAST.SUCCESS_TITLE,
                detail: messages.login.TOAST.REDIRECT_MESSAGE,
            });

            setTimeout(() => router.push('/welcome'), 3000);
        } catch {
            actions.setSubmitting(false);
            btnSubmitRef.current?.setLoading(false);

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

    const initialValues = {
        email: 'admin@matheusgomesdev.com.br',
        password: '123456',
        manter_logado: false,
    };

    return (
        <>
            <main data-testid="page-login" className="page-login">
                <Header />

                <BaseForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                    onSubmit={handleLogin}
                    data-testid="o-login-form"
                    className={'o_form_login'}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="page-login__form">
                        <div data-testid="page-login-title-testid" className="page-login__form_title">
                            <Icon icon="pi-lock" />
                            <Title variant="h2">{t('specific.home.label.title')}</Title>
                            <Text variant="fwReg-fs16-gray500">{t('specific.home.label.description')}</Text>
                        </div>

                        <InputWithLabel
                            labelText="Email"
                            name="email"
                            type="email"
                            placeholder={t('specific.home.inputLabel.email')}
                        />

                        <InputWithLabel
                            labelText="Senha"
                            name="password"
                            type="password"
                            placeholder={t('specific.home.inputLabel.senha')}
                        />

                        <CheckboxWithLabel
                            name="manter_logado"
                            labelText={`${t('specific.home.inputLabel.manterConectado')}`}
                            checked={initialValues.manter_logado}
                        />

                        <Button variant="gradient" type="submit" ref={btnSubmitRef}>
                            Entrar
                        </Button>

                        <GetValues />
                    </div>
                </BaseForm>

                <Footer />
            </main>

            <Toast ref={toastRef} position="bottom-center" />

            {showBlockUI && <BlockUI blocked={showBlockUI} fullScreen />}
        </>
    );
}

const GetValues: React.FC = () => {
    const { values } = useFormikContext();

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    console.log(values);
                }}
            >
                GetFormValues
            </button>
        </>
    );
};

export default withSessionHOC(Home);
