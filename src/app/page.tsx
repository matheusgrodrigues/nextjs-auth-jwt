"use client";

// Interfaces
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Handles
import { handleLoginForm } from "@/components/organism/o-login-form/login-form-validation";

// Pages
import { P_Home } from "@/components/pages/p-login/p-login";

// HOC
import { withSessionHOC } from "@/services/sessionService/sessionService";

function Home() {
  // Organism: LoginTitle
  const o_loginTitle: I_OLoginTitle = {
    image: "/images/a-avatar.jpeg",
    title: "NextJS: Auth + JWT",
    username: "@matheusgomesdev",
  };

  // Template: LoginForm
  const t_loginProps = {
    o_loginTitle,
    handleLoginForm,
  };

  return <P_Home t_loginProps={t_loginProps} />;
}

export default withSessionHOC(Home);
