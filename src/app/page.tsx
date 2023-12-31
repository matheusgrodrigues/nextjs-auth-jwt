"use client";

// Interfaces
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";
import { I_OHeader } from "@/components/organism/o-header/o-header";
import { I_TLogin } from "@/components/templates/t-login/t-login";

// Handles
import { handleLoginForm } from "@/components/organism/o-login-form/login-form-validation";

// Organism
import { O_BlockUI } from "@/components/organism/o-block-ui/o-block-ui";

// Pages
import { P_Home } from "@/components/pages/p-login/p-login";

// HOC
import { I_SessionHOC, withSessionHOC } from "@/services/sessionService/sessionService";

interface I_Home extends I_SessionHOC {}

function Home({ data, loading, error }: I_Home) {
  const { session } = data;

  const showBlockUI = session && !error && !loading ? true : false;

  // Organism: Header
  const o_headerProps: I_OHeader = {
    link: "https://github.com/matheusgrodrigues",
    image: "/images/a-avatar.jpeg",
  };

  // Dados falsos

  // Organism: LoginTitle
  const o_loginTitle: I_OLoginTitle = {
    image: "/images/a-avatar.jpeg",
    title: "Acesse sua conta",
  };

  // Template: LoginForm
  const t_loginProps: I_TLogin = {
    o_loginTitle,
    handleLoginForm,
  };

  // Organism: Footer
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
