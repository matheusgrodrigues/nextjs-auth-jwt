import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Molecules
import { M_ConfirmDialog } from "./m-confirm-dialog";

describe("Deve renderizar o m-confirmation, corretamente", () => {
  const confirmDialog = {
    visible: true,
    message: "Tem certeza que deseja sair ?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",

    accept: () => console.log("confirm_action"),
    reject: () => console.log("cancel_action"),
  };

  const { visible, message, header, icon, accept, reject } = confirmDialog;

  beforeEach(() => {
    render(
      <M_ConfirmDialog
        visible={visible}
        message={message}
        header={header}
        icon={icon}
        accept={accept}
        reject={reject}
      />
    );
  });

  it("Deve renderizar o modal na tela", () => {
    const get_confirm_dialog = screen.getByTestId("m-confirm-dialog");

    expect(get_confirm_dialog).toBeInTheDocument;
  });

  it("Deve mostrar o botão de cancelar", () => {
    const get_confirm_button = screen.getByTestId("m-confirm-dialog-reject-button");

    expect(get_confirm_button).toBeInTheDocument();
  });
});
