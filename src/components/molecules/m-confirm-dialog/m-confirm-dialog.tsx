import { ConfirmDialog, ConfirmDialogProps, confirmDialog } from "primereact/confirmdialog";

interface I_MConfirmDialog extends ConfirmDialogProps {
  "data-testid"?: string;
}

export const M_ConfirmDialog = ({ ...props }: I_MConfirmDialog) => {
  return (
    <ConfirmDialog
      pt={{
        root: {
          "data-testid": "m-confirm-dialog",
        },
        rejectButton: {
          root: {
            "data-testid": "m-confirm-dialog-reject-button",
          },
        },
      }}
      {...props}
    />
  );
};
