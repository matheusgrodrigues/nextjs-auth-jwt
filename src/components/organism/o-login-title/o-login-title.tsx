import { HTMLAttributes } from "react";

// Atoms
import { A_Avatar, ATitle } from "@/components/atoms";

// StyleSheet
import styles from "./o-login-title.module.css";

interface I_OLoginTitle extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  username: string;
}

export const O_LoginTitle = ({ image, title, username }: I_OLoginTitle) => {
  return (
    <div>
      <A_Avatar
        image={image}
        label={username[0]}
        size="normal"
        shape="circle"
      />
      <ATitle variant="h1">{title}</ATitle>
    </div>
  );
};
