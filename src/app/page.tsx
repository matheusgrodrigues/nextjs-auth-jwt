"use client";

import { useState } from "react";
import { ALabel, AAvatar, ATitle, AInput, ACheckbox } from "./components";

export default function Home() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <AAvatar image="/images/a-avatar.jpeg" size="normal" shape="circle" />
      <ATitle variant="h1" label="NextJS: Auth + JWT" />
      <ALabel>ALabel</ALabel>
      <AInput type="text" name="email" placeholder="Informe o seu e-mail" />
      <ACheckbox onChange={e => setChecked(e.checked)} checked={checked} />

    </>
  );
}
