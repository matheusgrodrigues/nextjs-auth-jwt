import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Interfaces
import { I_OLoginForm } from "@/components/organism/o-login-form/o-login-form";
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Template
import { T_Login } from "./t-login";

describe("Deve renderizar o t-login, corretamente", () => {
  it("Deve renderizar o o-login-title", () => {
    // Arrange
    const loginTitleProps: I_OLoginTitle = {
      image: "",
      title: "",
      username: "",
    };
    const loginFormProps: I_OLoginForm = {
      onSubmit: () => null,
      errors: {},
    };

    render(
      <T_Login
        loginTitleProps={loginTitleProps}
        loginFormProps={loginFormProps}
      />
    );

    // Act
    const get_t_login = screen.getByTestId("t-login");

    // Assert
    expect(get_t_login).toBeInTheDocument();
  });
});
