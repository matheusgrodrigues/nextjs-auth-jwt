"use client";

import { useMemo } from "react";

import styles from "@/styles/components/pages/p-login.module.scss";

import Header from "@/components/organism/Header/Header";
import Footer from "@/components/organism/Footer/Footer";

import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";
import { I_TLogin } from "@/components/templates/Login/t-login";

import { handleLoginForm } from "@/components/organism/o-login-form/login-form-validation";

import { O_BlockUI } from "@/components/organism/o-block-ui/o-block-ui";

import { SessionHOCProps, withSessionHOC } from "@/services/sessionService/sessionService";

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
  const { session } = data;

  const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

  const o_loginTitle: I_OLoginTitle = {
    image: "/images/a-avatar.jpeg",
    title: "Acesse sua conta",
  };

  const t_loginProps: I_TLogin = {
    o_loginTitle,
    handleLoginForm,
  };

  return (
    <>
      <main data-testid="p-home" className={styles.p_home}>
        <Header image="https://github.com/matheusgrodrigues" link="/images/a-avatar.jpeg" />

        <T_Login o_loginTitle={t_loginProps.o_loginTitle} handleLoginForm={t_loginProps.handleLoginForm} />

        <Footer
          github="https://github.com/matheusgrodrigues/nextjs-auth-jwt"
          linkedin="https://www.linkedin.com/in/matheusgomes/"
          name="matheusgomesdev"
          site="https://matheusgomesdev.com.br"
        />
      </main>

      {showBlockUI && <O_BlockUI blocked={showBlockUI} fullScreen />}
    </>
  );
}

export default withSessionHOC(Home);
