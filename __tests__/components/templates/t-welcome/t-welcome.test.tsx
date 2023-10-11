import { render, screen } from "@testing-library/react";

// Template
import { T_Welcome } from "../../../../src/components/templates/index";

const handleLogout = jest.fn();

const username = "Matheus Gomes";

beforeEach(() => render(<T_Welcome username={username} handleLogout={handleLogout} />));

describe("Deve renderizar o t-welcome corretamente.", () => {
  // =====================================================================

  it("Deve renderizar o titulo de bem vindo.", () => {
    const get_welcome_text = screen.getByTestId("a-text-welcome");

    expect(get_welcome_text).toBeInTheDocument();
  });

  it("Deve renderizar o nome do usuario.", () => {
    const get_username = screen.getByTestId("a-title-username");

    expect(get_username).toBeInTheDocument();
    expect(get_username.textContent).not.toHaveLength(0);
  });

  it("Deve renderizar a descrição de boas vindas.", () => {
    const get_description = screen.getByTestId("a-text-description");

    expect(get_description).toBeInTheDocument();
  });

  // =====================================================================

  describe("Deve renderizar o botão de logout", () => {
    it("Deve mostrar o botão na tela", () => {
      const get_logout_button = screen.getByTestId("a-button-logout");

      expect(get_logout_button).toBeInTheDocument();
    });
  });
});
