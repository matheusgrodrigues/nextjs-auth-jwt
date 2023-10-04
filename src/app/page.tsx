"use client";

import { useState } from "react";

// Atoms
import {
  A_Label,
  A_Avatar,
  A_Title,
  A_Input,
  A_Checkbox,
  A_Button,
} from "@/components/atoms";

// Molecules
import { M_InputWithLabel, M_CheckboxWithLabel } from "@/components/molecules";

// Organism
import { O_FormLogin } from "@/components/organism";
import { O_LoginTitle } from "@/components/organism/o-login-title/o-login-title";

export default function Home() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <O_LoginTitle
        image="/images/a-avatar.jpeg"
        title="NextJS: Auth + JWT"
        username="@matheusgomesdev"
      />
    </>
  );
}
