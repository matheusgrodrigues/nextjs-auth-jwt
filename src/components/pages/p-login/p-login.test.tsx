import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Interfaces
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Pages
import { P_Home } from "./p-login";

describe("Deve renderizar a pagina de login, corretamente", () => {
  const o_loginTitle: I_OLoginTitle = {
    image: "",
    title: "",
    username: "",
  };

  const handleLoginForm = jest.fn();

  beforeEach(() => {
    render(
      <P_Home
        t_loginProps={{
          o_loginTitle,
          handleLoginForm,
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
          t_loginProps={{
            o_loginTitle,
            handleLoginForm,
          }}
        />
      )
      .toJSON();

    expect(get_p_login).toMatchSnapshot();
  });
  // ============================================
});
