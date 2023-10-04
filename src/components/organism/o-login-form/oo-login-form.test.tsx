import { FormEventHandler } from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Organism
import { O_LoginForm } from "./o-login-form";

describe("Deve renderizar o o-form-login, corretamente", () => {
  // ======================================================================

  it("Deve renderizar todos campos do formulário", () => {
    // Arrange
    const onSubmit: FormEventHandler = (e) => e.preventDefault();
    const errors = {};

    render(<O_LoginForm onSubmit={onSubmit} errors={errors} />);

    // Act
    const get_m_input_with_label_email = screen.getByTestId(
      "m-input-with-label-email"
    );
    const get_m_input_with_label_password = screen.getByTestId(
      "m-input-with-label-password"
    );

    // Assert
    expect(get_m_input_with_label_email).toBeInTheDocument();
    expect(get_m_input_with_label_password).toBeInTheDocument();
  });

  // ======================================================================

  it("Deve renderizar o botão de submit", () => {
    // Arrange
    const onSubmit: FormEventHandler = (e) => e.preventDefault();
    const errors = {};

    render(<O_LoginForm onSubmit={onSubmit} errors={errors} />);

    // Act
    const get_a_button = screen.getByTestId("a-button");

    // Assert
    expect(get_a_button).toBeInTheDocument();
    expect(get_a_button).toHaveAttribute("type", "submit");
  });

  // ======================================================================
  it("Deve manter a estrutura visual do componente", () => {
    const onSubmit: FormEventHandler = (e) => e.preventDefault();
    const errors = {};

    const get_o_form_login = renderer
      .create(<O_LoginForm onSubmit={onSubmit} errors={errors} />)
      .toJSON();

    expect(get_o_form_login).toMatchSnapshot();
  });

  // ======================================================================
});

// =====================================
