// Interfaces
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";

// Templates
import { T_Welcome } from "@/components/templates";

// StyleSheet
import styles from "./p-welcome.module.css";

export interface I_PWelcome {
  t_WelcomeProps: I_TWelcome;
}

export const P_Welcome = ({ t_WelcomeProps }: I_PWelcome) => {
  return (
    <main className={styles.p_welcome}>
      <T_Welcome {...t_WelcomeProps} />
    </main>
  );
};
