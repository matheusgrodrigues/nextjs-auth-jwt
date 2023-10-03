"use client";

import { useState } from "react";

// Atoms
import {
  A_Label,
  AAvatar,
  ATitle,
  A_Input,
  ACheckbox,
  A_Button,
} from "@/components/atoms";

// Molecules
import { M_InputWithLabel } from "@/components/molecules";

export default function Home() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <AAvatar image="/images/a-avatar.jpeg" size="normal" shape="circle" />
      <ATitle variant="h1" label="NextJS: Auth + JWT" />
      <A_Label>ALabel</A_Label>
      <A_Input type="text" name="email" placeholder="Informe o seu e-mail" />
      <A_Button>a-button</A_Button>

      <M_InputWithLabel
        labelText="E-mail"
        type="text"
        name="email"
        placeholder="Informe o seu e-mail"
      />

      <M_InputWithLabel
        labelText="Senha"
        type="password"
        name="senha"
        placeholder="*******"
      />

      <ACheckbox onChange={(e) => setChecked(e.checked)} checked={checked} />
    </>
  );
}
