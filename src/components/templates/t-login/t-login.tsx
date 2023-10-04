
// Organism and I_OTypes
import {
  I_OLoginForm,
  O_LoginForm,
} from "@/components/organism/o-login-form/o-login-form";
import {
  I_OLoginTitle,
  O_LoginTitle,
} from "@/components/organism/o-login-title/o-login-title";

// StyleSheet
import styles from "./t-login.module.css";

interface I_TLogin {
  loginTitleProps: I_OLoginTitle;
  loginFormProps: I_OLoginForm;
}

export const T_Login = ({ loginTitleProps, loginFormProps }: I_TLogin) => {
  const { image, title, username } = loginTitleProps;
  const { onSubmit, errors } = loginFormProps;

  return (
    <div data-testid="t-login" className={styles.t_login}>
      <O_LoginTitle image={image} title={title} username={username} />
      <O_LoginForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};
