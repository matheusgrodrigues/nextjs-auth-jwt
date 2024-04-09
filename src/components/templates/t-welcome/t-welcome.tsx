import { useState } from "react";

// StyleSheet
import styles from "./t-welcome.module.scss";

// Atoms
import { A_Button, A_Text, A_Title } from "@/components/atoms";

// Logout Dialog
import { LogoutDialog } from "./logout-dialog/logout-dialog";

// Interfaces
import { I_SessionHOC } from "@/core/services/sessionService/sessionService";

export interface I_TWelcome {
  userSession: I_SessionHOC | undefined;
  handleLogout: () => void;
}

export const T_Welcome = ({ userSession, handleLogout }: I_TWelcome) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <main className={styles.t_welcome} id="t-welcome">
      <div className={styles.t_welcome__heading}>
        <A_Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
          Bem-vindo(a) ao nosso serviço !
        </A_Text>

        <A_Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
          {userSession && userSession.data.session?.username}
        </A_Title>
      </div>

      <A_Text data-testid="a-text-description" variant="fwReg-fs20-lh30-gray500" id="a-text-description">
        Queremos que você se sinta em casa e aproveite ao máximo tudo o que oferecemos. Se tiver alguma dúvida ou
        precisar de ajuda, não hesite em nos chamar. Estamos sempre prontos para tornar sua experiência conosco
        incrível. Mais uma vez, bem-vindo(a)!
      </A_Text>

      <A_Button variant="fwMd-fs16-colGray700-bgWhite" data-testid="a-button-logout" onClick={toggleVisible}>
        Logout
      </A_Button>

      {/* Dialog Logout */}
      <LogoutDialog visible={visible} onConfirm={handleLogout} onReject={toggleVisible} />
    </main>
  );
};
