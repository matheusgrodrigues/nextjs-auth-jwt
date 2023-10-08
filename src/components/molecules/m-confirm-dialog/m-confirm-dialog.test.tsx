import { render, screen } from "@testing-library/react";

import { M_ConfirmDialog } from "./m-confirm-dialog";

// Molecules

describe("Deve renderizar o m-confirmation, corretamente", () => {


  beforeEach(() => {
    render(
      <M_ConfirmDialog visible={true} />
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
