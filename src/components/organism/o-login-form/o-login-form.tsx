import { FormEventHandler } from "react";

// Atoms
import { A_Button } from "@/components/atoms";

// Molecules
import { M_CheckboxWithLabel, M_InputWithLabel } from "@/components/molecules";

import styles from "./o-login-form.module.css";

type errors = { [key: string]: string };

export interface I_OLoginForm {
  onSubmit: FormEventHandler;
  errors: errors;
}

export const O_LoginForm = ({ onSubmit, errors }: I_OLoginForm) => {
  return (
    <form onSubmit={onSubmit} className={styles.o_form_login}>
      <M_InputWithLabel
        labelText="Email"
        type="email"
        name="email"
        placeholder="Informe o seu e-mail"
      />

      {errors["email"] || null}

      <M_InputWithLabel
        labelText="Senha"
        type="password"
        name="password"
        placeholder="Informe a sua senha"
      />

      {errors["password"] || null}

      <M_CheckboxWithLabel
        checked={false}
        labelText="Manter-me conectado por 30 dias."
        style={{ margin: "var(--spacing-4) 0" }}
      />

      <A_Button type="submit">Login</A_Button>
    </form>
  );
};
