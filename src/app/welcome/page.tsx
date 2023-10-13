"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Pages
import { P_Welcome } from "@/components/pages/p-welcome/p-welcome";

// Templates
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";

// HOC
import { I_SessionHOC, withSessionHOC } from "@/services/sessionService/sessionService";

interface I_Home extends I_SessionHOC {}

function Welcome({ ...props }: I_Home) {
  const router = useRouter();

  const {jwt, user} = props.data.session;


  // bootstrap: T_Welcome
  const [TWelcomeProps, setTWelcomeProps] = useState<I_TWelcome>({
    username: user.username,
    handleLogout: () => {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
  });

  return <P_Welcome t_WelcomeProps={TWelcomeProps} />;
}

export default withSessionHOC(Welcome);
