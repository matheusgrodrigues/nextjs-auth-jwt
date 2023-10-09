import { useState } from "react";

// Atoms
import { A_Button, A_Text, A_Title } from "@/components/atoms";

// Molecules
import { M_Dialog } from "@/components/molecules/m-dialog/m-dialog";

// StyleSheet
import styles from "./logout-dialog.module.css";

interface I_LogoutDialog {
  visible: boolean;
  onConfirm: () => void;
  onReject: () => void;
}

export const LogoutDialog = ({ visible, onConfirm, onReject, ...props }: I_LogoutDialog) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <M_Dialog
      visible={visible}
      onHide={() => null}
      data-testid="logout-dialog"
      className={styles.logoutDialog}
      showHeader={false}
      {...props}
    >
      <div className={styles.logoutDialog__header}>
        <A_Title variant="h2" data-testid="logout-dialog-title">
          Confirmação
        </A_Title>
        <A_Text variant="fwReg-fs20-lh30-gray500" data-testid="logout-dialog-description">
          Tem certeza que deseja sair ?
        </A_Text>
      </div>

      <div className={styles.logoutDialog__footer}>
        <A_Button
          variant="gradient"
          data-testid="logout-dialog-confirm-button"
          loading={isLoading}
          onClick={() => {
            setIsLoading(true);
            onConfirm();
          }}
        >
          {isLoading ? "" : "Sim"}
        </A_Button>
        <A_Button variant="fwMd-fs16-colGray700-bgWhite" data-testid="logout-dialog-reject-button" onClick={onReject}>
          Não
        </A_Button>
      </div>
    </M_Dialog>
  );
};
