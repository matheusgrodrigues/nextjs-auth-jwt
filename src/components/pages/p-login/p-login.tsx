// StyleSheet
import styles from "./p-login.module.css";

// Interfaces
import { I_TLogin } from "@/components/templates/t-login/t-login";

// Templates
import { T_Login } from "@/components/templates";

interface I_PHome {
  templateLoginProps: I_TLogin;
}

export const P_Home = ({ templateLoginProps }: I_PHome) => {
  const { loginTitleProps, loginFormProps } = templateLoginProps;

  return (
    <main data-testid="p-home" className={styles.p_home}>
      <T_Login
        loginTitleProps={loginTitleProps}
        loginFormProps={loginFormProps}
      />
    </main>
  );
};
