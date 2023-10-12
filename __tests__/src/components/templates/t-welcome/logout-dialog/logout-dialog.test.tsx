import { render, screen } from "@testing-library/react";

// LogoutDialog
import { LogoutDialog } from "../../../../../../src/components/templates/t-welcome/logout-dialog/logout-dialog";

describe("Deve renderizar o logout dialog, corretamente", () => {
  beforeEach(() => {
    render(<LogoutDialog visible={true} onConfirm={() => null} onReject={() => null} />);
  });

  it("Deve mostrar o botão de confirmação", () => {
    const get_confirm_button = screen.getByTestId("logout-dialog-confirm-button");

    expect(get_confirm_button).toBeInTheDocument();
  });
});
