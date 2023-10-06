import { A_Button, A_Text, A_Title } from "@/components/atoms";

// StyleSheet
import styles from "./t-welcome.module.css";

export interface I_TWelcome {
  username: string;
  handleLogout: () => void;
}

export const T_Welcome = ({ username, handleLogout }: I_TWelcome) => {
  return (
    <main className={styles.t_welcome} id="t-welcome">
      <div className={styles.t_welcome__heading}>
        <A_Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
          Bem-vindo(a) ao nosso serviço !
        </A_Text>
        <A_Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
          {username}
        </A_Title>
      </div>
      <A_Text data-testid="a-text-description" variant="fwReg-fs20-lh30-gray500" id="a-text-description">
        Queremos que você se sinta em casa e aproveite ao máximo tudo o que oferecemos. Se tiver alguma dúvida ou
        precisar de ajuda, não hesite em nos chamar. Estamos sempre prontos para tornar sua experiência conosco
        incrível. Mais uma vez, bem-vindo(a)!
      </A_Text>
      <A_Button data-testid="a-button-logout" onClick={handleLogout}>
        Logout
      </A_Button>
    </main>
  );
};
