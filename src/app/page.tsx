"use client";

import { ALabel, AAvatar, ATitle, AInput } from "./components";

export default function Home() {
  return (
    <>
      <AAvatar image="/images/a-avatar.jpeg" size="normal" shape="circle" />
      <ATitle variant="h1" label="NextJS: Auth + JWT" />
      <ALabel>ALabel</ALabel>
      <AInput type="text" name="email" placeholder="Informe o seu e-mail" />
    </>
  );
}
