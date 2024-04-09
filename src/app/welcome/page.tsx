"use client";

import { useRouter } from "next/navigation";

// Pages
import { P_Welcome } from "@/components/pages/p-welcome/p-welcome";

// Organism
import { I_OHeader } from "@/components/organism/header/o-header";
import { I_OFooter } from "@/components/organism/Footer/o-footer";

// Templates
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";

// HOC
import { I_SessionHOC, withSessionHOC } from "@/services/sessionService/sessionService";

// Services
import { tokenService } from "@/services/tokenService/tokenService";

interface I_Welcome extends I_SessionHOC {}

function Welcome(props: I_Welcome) {
  const router = useRouter();

  const { session } = props.data;

  // Organism: Header
  const o_headerProps: I_OHeader = {
    link: "https://github.com/matheusgrodrigues",
    image: "/images/a-avatar.jpeg",
  };

  // T_Welcome
  const welcomeProps: I_TWelcome = {
    userSession: props,
    handleLogout: () => {
      tokenService.delete();
      router.push("/");
    },
  };

  // Organism: Footer
  const o_footerProps: I_OFooter = {
    name: "matheusgomesdev",
    site: "https://matheusgomesdev.com.br",
    github: "https://github.com/matheusgrodrigues/nextjs-auth-jwt",
    linkedin: "https://www.linkedin.com/in/matheusgomes/",
  };

  return (
    session && <P_Welcome o_headerProps={o_headerProps} t_WelcomeProps={welcomeProps} o_footerProps={o_footerProps} />
  );
}

export default withSessionHOC(Welcome);
