import { FormEventHandler } from "react";

// Molecules
import { M_InputWithLabel } from "@/components/molecules";

type errors = { [key: string]: string };

interface I_OFormLogin {
  onSubmit: FormEventHandler;
  errors: errors;
}

export const O_FormLogin = ({ onSubmit, errors }: I_OFormLogin) => {
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
};
