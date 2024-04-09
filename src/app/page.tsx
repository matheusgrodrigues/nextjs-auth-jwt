'use client';

import { useCallback, useMemo, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';

import { SessionHOCProps, withSessionHOC } from '@/core/services/sessionService';

import styles from '@/styles/components/pages/login.module.scss';

import Header from '@/components/organism/Header/Header';
import Footer from '@/components/organism/Footer/Footer';

import { O_BlockUI } from '@/components/organism/o-block-ui/o-block-ui';

import { A_Icon } from '@/components/atoms/a-icon/a-icon';
import { A_Button, A_Text, A_Title } from '@/components/atoms';
import { M_CheckboxWithLabel, M_InputWithLabel } from '@/components/molecules';
import { I_MToastComponent, M_Toast } from '@/components/molecules/m-toast/m-toast';

import { initialValues, validationSchema } from '@/components/organism/o-login-form/login-form-validation';
import { I_HandleLoginProps } from '@/components/organism/o-login-form/login-form-validation/login-form-send';

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
    const { session } = data;

    const router = useRouter();

    const mToastRef = useRef<I_MToastComponent>(null);

    const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

    const handleLoginForm = useCallback(({}: I_HandleLoginProps) => {}, []);

    const { handleSubmit, errors, touched, getFieldProps, values, isSubmitting } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            handleLoginForm({ values, setSubmitting, mToastRef, router });
        },
        validateOnChange: false,
        validateOnBlur: true,
    });

    return (
        <>
            <main data-testid="p-home" className={styles.p_home}>
                <Header image="https://github.com/matheusgrodrigues" link="/images/a-avatar.jpeg" />

                <div data-testid="loginTitle" className={styles.loginTitle}>
                    <A_Icon icon="pi-lock" />
                    <A_Title variant="h2">{'Acesse sua conta'}</A_Title>
                    <A_Text variant="fwReg-fs16-gray500">
                        Estamos felizes em vê-lo novamente! Insira suas credenciais para entrar.
                    </A_Text>
                </div>

                <form onSubmit={handleSubmit} className={styles.o_form_login} data-testid="o-login-form">
                    <M_InputWithLabel
                        labelText="Email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        {...getFieldProps('email')}
                    />

                    {errors.email && touched.email && <A_Text variant="error">{errors.email}</A_Text>}

                    <M_InputWithLabel
                        labelText="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        {...getFieldProps('password')}
                    />

                    {errors.password && touched.password && <A_Text variant="error">{errors.password}</A_Text>}

                    <M_CheckboxWithLabel
                        checked={values.manter_logado}
                        labelText="Mantenha-me conectado."
                        {...getFieldProps('manter_logado')}
                    />

                    <A_Button variant="gradient" type="submit" loading={isSubmitting}>
                        {isSubmitting ? '' : 'Entrar'}
                    </A_Button>
                </form>

                <Footer
                    github="https://github.com/matheusgrodrigues/nextjs-auth-jwt"
                    linkedin="https://www.linkedin.com/in/matheusgomes/"
                    name="matheusgomesdev"
                    site="https://matheusgomesdev.com.br"
                />
            </main>

            <M_Toast ref={mToastRef} position="bottom-center" />

            {showBlockUI && <O_BlockUI blocked={showBlockUI} fullScreen />}
        </>
    );
}

export default withSessionHOC(Home);
