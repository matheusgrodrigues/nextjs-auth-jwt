"use client";

import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";
import { I_OHeader } from "@/components/organism/o-header/o-header";
import { I_TLogin } from "@/components/templates/t-login/t-login";

import { handleLoginForm } from "@/components/organism/o-login-form/login-form-validation";

import { O_BlockUI } from "@/components/organism/o-block-ui/o-block-ui";

import { P_Home } from "@/components/pages/p-login/p-login";

import { SessionHOCProps, withSessionHOC } from "@/services/sessionService/sessionService";
import { useMemo } from "react";

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
  const { session } = data;

  const showBlockUI = useMemo(() => (session && !error && !loading ? true : false), [loading, session, error]);

  const o_headerProps: I_OHeader = {
    link: "https://github.com/matheusgrodrigues",
    image: "/images/a-avatar.jpeg",
  };

  const o_loginTitle: I_OLoginTitle = {
    image: "/images/a-avatar.jpeg",
    title: "Acesse sua conta",
  };

  const t_loginProps: I_TLogin = {
    o_loginTitle,
    handleLoginForm,
  };

  const o_footerProps = {
    name: "matheusgomesdev",
    site: "https://matheusgomesdev.com.br",
    github: "https://github.com/matheusgrodrigues/nextjs-auth-jwt",
    linkedin: "https://www.linkedin.com/in/matheusgomes/",
  };

  return (
    <>
      <P_Home o_headerProps={o_headerProps} t_loginProps={t_loginProps} o_footerProps={o_footerProps} />
      {showBlockUI && <O_BlockUI blocked={showBlockUI} fullScreen />}
    </>
  );
}

export default withSessionHOC(Home);
