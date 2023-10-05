"use client";

import { useState } from "react";

// Interfaces
import { I_OLoginForm } from "@/components/organism/o-login-form/o-login-form";
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Pages
import { P_Home } from "@/components/pages/p-login/p-login";

export default function Home() {
  const [LoginTitleProps, setLoginTitleProps] = useState<I_OLoginTitle>({
    image: "/images/a-avatar.jpeg",
    title: "NextJS: Auth + JWT",
    username: "@matheusgomesdev",
  });

  const [LoginFormUrl, setLoginFormUrl] = useState<I_OLoginForm>({ sendFormUrl: "endpoint: app/page.tsx" });

  return (
    <main>
      <P_Home
        templateLoginProps={{
          loginTitleProps: LoginTitleProps,
          loginFormUrl: LoginFormUrl,
        }}
      />
    </main>
  );
}
