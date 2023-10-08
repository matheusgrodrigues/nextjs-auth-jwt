import { render, screen } from "@testing-library/react";

import { M_Dialog } from "./m-dialog";

// Molecules

describe("Deve renderizar o m-confirmation, corretamente", () => {
  beforeEach(() => {
    render(<M_Dialog visible={true} onHide={() => null} />);
  });

  it("Deve renderizar o modal na tela", () => {
    const get_confirm_dialog = screen.getByTestId("m-dialog");

    expect(get_confirm_dialog).toBeInTheDocument;
  });

  it("Deve preservar a estrutura visual do Dialog", () => {
    const get_confirm_dialog = screen.getByTestId("m-dialog");

    expect(get_confirm_dialog).toMatchSnapshot();
  });
});
