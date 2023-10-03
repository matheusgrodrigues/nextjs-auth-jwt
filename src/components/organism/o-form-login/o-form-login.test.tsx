import { FormEventHandler } from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Organism
import { O_FormLogin } from "./o-form-login";

describe("Deve renderizar o o-form-login, corretamente", () => {
  // ======================================================================

  it("Deve renderizar todos campos do formulário", () => {
    // Arrange
    const onSubmit: FormEventHandler = (e) => e.preventDefault();
    const errors = {};

    render(<O_FormLogin onSubmit={onSubmit} errors={errors} />);

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
});

// =====================================
