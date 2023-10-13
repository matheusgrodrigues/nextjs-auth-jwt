import { HTMLAttributes } from "react";

// Organism and I_OTypes
import { O_LoginForm } from "@/components/organism/o-login-form/o-login-form";
import { I_OLoginTitle, O_LoginTitle } from "@/components/organism/o-login-title/o-login-title";

// StyleSheet
import styles from "./t-login.module.css";

// Types
import { T_HandleLoginForm } from "@/components/organism/o-login-form/login-form-validation/login-form-validation";

export interface I_TLogin extends HTMLAttributes<HTMLDivElement> {
  o_loginTitle: I_OLoginTitle;
  handleLoginForm: T_HandleLoginForm;
}

export const T_Login = ({ o_loginTitle, handleLoginForm, ...props }: I_TLogin) => {
  const { image, title } = o_loginTitle;

  return (
    <div data-testid="t-login" className={styles.t_login} id="t-login" {...props}>
      <O_LoginTitle image={image} title={title} userSession={o_loginTitle.userSession} />
      <O_LoginForm handleLoginForm={handleLoginForm} />
    </div>
  );
};
