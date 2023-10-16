// Atoms
import { A_Button, A_Text, A_Title } from "@/components/atoms";

// StyleSheets
import styles from "./t-401.module.css";

export interface I_T401 {
  handleLogin: () => void;
}

export const T_401 = ({ handleLogin }: I_T401) => {
  return (
    <main data-testid="t-401" className={styles.t_401} id="t-401">
      <A_Text variant="fwSb-fs16-primary">401</A_Text>
      <A_Title variant="h1">Acesso não autorizado</A_Title>
      <A_Text variant="fwReg-fs16-gray500">
        Desculpe, você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou entre em
        contato com o suporte se precisar de assistência.
      </A_Text>
      <A_Button variant="gradient" onClick={handleLogin}>
        Faça Login
      </A_Button>
    </main>
  );
};
