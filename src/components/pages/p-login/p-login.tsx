// StyleSheet
import styles from "./p-login.module.css";

// Interfaces
import { I_TLogin } from "@/components/templates/t-login/t-login";

// Templates
import { T_Login } from "@/components/templates";

interface I_PHome {
  t_loginProps: I_TLogin;
}

export const P_Home = ({ t_loginProps }: I_PHome) => {
  const { o_loginTitle, handleLoginForm } = t_loginProps;

  return (
    <main data-testid="p-home" className={styles.p_home}>
      <T_Login o_loginTitle={o_loginTitle} handleLoginForm={handleLoginForm} />
    </main>
  );
};
