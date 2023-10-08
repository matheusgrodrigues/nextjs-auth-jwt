import { ConfirmDialog, ConfirmDialogProps, confirmDialog } from "primereact/confirmdialog";

// StyleSheet
import styles from "./m-confirm-dialog.module.css";

interface I_MConfirmDialog extends ConfirmDialogProps {
  "data-testid"?: string;
}

export const m_confirmDialog = confirmDialog;

export const M_ConfirmDialog = ({ ...props }: I_MConfirmDialog) => {
  return (
    <ConfirmDialog
      pt={{
        root: {
          "data-testid": "m-confirm-dialog",
          className: styles.m_confirm_dialog,
        },
        rejectButton: {
          root: {
            "data-testid": "m-confirm-dialog-reject-button",
          },
        },
      }}
      {...props}
      unstyled    />
  );
};
