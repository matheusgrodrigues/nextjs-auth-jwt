import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Organism
import { O_LoginForm } from "../../../../src/components/organism/o-login-form/o-login-form";
import { AppRouterContextProviderMock } from "@/test-utils/app-router-ctx-provider-mock";

describe("Deve renderizar o o-form-login, corretamente", () => {
  const handleLoginForm = jest.fn();
  const push = jest.fn();

  // ======================================================================
  beforeEach(() => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <O_LoginForm handleLoginForm={handleLoginForm} />
      </AppRouterContextProviderMock>
    );
  });
  // ======================================================================

  it("Deve renderizar todos campos do formulário", () => {
    // Arrange -> beforeEach
    const push = jest.fn();

    // Act
    const get_m_input_with_label_email = screen.getByTestId("m-input-with-label-email");
    const get_m_input_with_label_password = screen.getByTestId("m-input-with-label-password");

    // Assert
    expect(get_m_input_with_label_email).toBeInTheDocument();
    expect(get_m_input_with_label_password).toBeInTheDocument();
  });

  // ======================================================================

  it("Deve renderizar o botão de submit", () => {
    // Arrange -> beforeEach

    // Act
    const get_a_button = screen.getByTestId("a-button");

    // Assert
    expect(get_a_button).toBeInTheDocument();
    expect(get_a_button).toHaveAttribute("type", "submit");
  });

  // ======================================================================
  it("Deve manter a estrutura visual do componente", () => {
    const get_o_form_login = renderer
      .create(
        <AppRouterContextProviderMock router={{ push }}>
          <O_LoginForm handleLoginForm={handleLoginForm} />
        </AppRouterContextProviderMock>
      )
      .toJSON();

    expect(get_o_form_login).toMatchSnapshot();
  });

  // ======================================================================
});
