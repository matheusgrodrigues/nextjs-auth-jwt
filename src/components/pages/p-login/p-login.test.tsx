import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Interfaces
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";
import { I_OLoginForm } from "@/components/organism/o-login-form/o-login-form";

// Pages
import { P_Home } from "./p-login";

describe("Deve renderizar a pagina de login, corretamente", () => {
  const loginTitleProps: I_OLoginTitle = {
    image: "",
    title: "",
    username: "",
  };
  const loginFormUrl: I_OLoginForm = {
   sendFormUrl: "endpoint"
  };

  beforeEach(() => {
    render(
      <P_Home
        templateLoginProps={{
          loginTitleProps,
          loginFormUrl,
        }}
      />
    );
  });
  // ============================================
  it("Deve renderizar o t-login", () => {
    // Arrange -: beforeEach

    // Act
    const get_t_login = screen.getByTestId("t-login");

    // Assert
    expect(get_t_login).toBeInTheDocument();
  });
  // ============================================

  it("Deve preservar a estrutura visual da p-login", () => {
    const get_p_login = renderer
      .create(
        <P_Home
          templateLoginProps={{
            loginTitleProps,
            loginFormUrl,
          }}
        />
      )
      .toJSON();

    expect(get_p_login).toMatchSnapshot();
  });
  // ============================================
});
