import { Dialog, DialogProps } from "primereact/dialog";

// StyleSheet
import styles from "./m-confirm-dialog.module.css";

export interface I_MConfirmDialog extends DialogProps {
  "data-testid"?: string;
}

export const M_ConfirmDialog = ({ children, ...props }: I_MConfirmDialog) => {
  return (
    <Dialog
      pt={{
        root: {
          "data-testid": "m-confirm-dialog",
          className: styles.m_confirmDialog,
        },
        mask: {
          className: styles.m_confirmDialog__mask,
        },
      }}
      {...props}
    >
      {children}
    </Dialog>
  );
};
