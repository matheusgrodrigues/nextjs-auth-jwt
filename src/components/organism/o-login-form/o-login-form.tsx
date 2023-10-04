import { FormEventHandler } from "react";

// Atoms
import { A_Button } from "@/components/atoms";

// Molecules
import { M_CheckboxWithLabel, M_InputWithLabel } from "@/components/molecules";

import styles from "./o-login-form.module.css";

export interface I_OLoginForm {
  onSubmit: FormEventHandler;
}

export const O_LoginForm = ({ onSubmit }: I_OLoginForm) => {
  return (
    <form onSubmit={onSubmit} className={styles.o_form_login} data-testid="o-login-form">
      <M_InputWithLabel labelText="Email" type="email" name="email" placeholder="Informe o seu e-mail" />

      <M_InputWithLabel labelText="Senha" type="password" name="password" placeholder="Informe a sua senha" />

      <M_CheckboxWithLabel
        checked={false}
        labelText="Manter-me conectado por 30 dias."
        style={{ margin: "var(--spacing-4) 0" }}
      />

      <A_Button type="submit">Login</A_Button>
    </form>
  );
};
