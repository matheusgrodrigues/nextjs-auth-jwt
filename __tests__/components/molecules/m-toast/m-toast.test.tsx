import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Molecules
import { M_Toast } from "../../../../src/components/molecules/m-toast/m-toast";

describe("Deve renderizar o m-toast, corretamente", () => {
  it("Deve renderizar o componente na tela", () => {
    render(
      <M_Toast
        message={{
          severity: "success",
          summary: "Success",
          detail: "Message Content",
          life: 3000,
        }}
      />
    );

    const get_toast = screen.getByTestId("m-toast");

    expect(get_toast).toBeInTheDocument();
  });
  it("Deve manter a estrutura visual do Toast", () => {
    const m_toast = renderer
      .create(
        <M_Toast
          message={{
            severity: "success",
            summary: "Success",
            detail: "Message Content",
            life: 3000,
          }}
        />
      )
      .toJSON();

    expect(m_toast).toMatchSnapshot();
  });
});
