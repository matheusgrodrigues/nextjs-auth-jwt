"use client";

import { T_Login } from "@/components/templates";
export default function Home() {
  return (
    <main>
      <T_Login
        loginTitleProps={{
          image: "/images/a-avatar.jpeg",
          title: "NextJS: Auth + JWT",
          username: "@matheusgomesdev",
        }}
        loginFormProps={{ onSubmit: () => null, errors: {} }}
      />
    </main>
  );
}
