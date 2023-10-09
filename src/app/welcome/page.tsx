"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Pages
import { P_Welcome } from "@/components/pages/p-welcome/p-welcome";

// Templates
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";

export default function Welcome() {
  const router = useRouter();

  // bootstrap: T_Welcome
  const [TWelcomeProps, setTWelcomeProps] = useState<I_TWelcome>({
    username: "Matheus Gomes",
    handleLogout: () => {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
  });

  return <P_Welcome t_WelcomeProps={TWelcomeProps} />;
}
