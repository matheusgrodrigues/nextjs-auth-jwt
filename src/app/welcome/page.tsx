"use client";

import { useRouter } from "next/navigation";

// Pages
import { P_Welcome } from "@/components/pages/p-welcome/p-welcome";

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

  // T_Welcome
  const welcomeProps: I_TWelcome = {
    userSession: props,
    handleLogout: () => {
      tokenService.delete();
      router.push("/");
    },
  };

  return session && <P_Welcome t_WelcomeProps={welcomeProps} />;
}

export default withSessionHOC(Welcome);
