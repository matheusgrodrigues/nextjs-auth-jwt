import { HTMLAttributes } from "react";

// Organism and I_OTypes
import { I_OLoginForm, O_LoginForm } from "@/components/organism/o-login-form/o-login-form";
import { I_OLoginTitle, O_LoginTitle } from "@/components/organism/o-login-title/o-login-title";

// StyleSheet
import styles from "./t-login.module.css";

export interface I_TLogin extends HTMLAttributes<HTMLDivElement> {
  loginTitleProps: I_OLoginTitle;
  loginFormProps: I_OLoginForm;
}

export const T_Login = ({ loginTitleProps, loginFormProps, ...props }: I_TLogin) => {
  const { image, title, username } = loginTitleProps;
  const { onSubmit } = loginFormProps;

  return (
    <div data-testid="t-login" className={styles.t_login} id="t-login" {...props}>
      <O_LoginTitle image={image} title={title} username={username} />
      <O_LoginForm onSubmit={onSubmit} />
    </div>
  );
};
