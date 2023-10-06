"use client";

import { useState } from "react";

// Pages
import { P_Welcome } from "@/components/pages/p-welcome/p-welcome";

// Templates
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";

export default function Welcome() {
  // bootstrap: T_Welcome
  const [TWelcomeProps, setTWelcomeProps] = useState<I_TWelcome>({
    username: "Matheus Gomes",
    handleLogout: () => location.href = "/",
  });
  return <P_Welcome t_WelcomeProps={TWelcomeProps} />;
}
