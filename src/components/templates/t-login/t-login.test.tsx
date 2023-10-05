import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Interfaces
import { I_OLoginForm } from "@/components/organism/o-login-form/o-login-form";
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Template
import { T_Login } from "./t-login";

const loginTitleProps: I_OLoginTitle = {
  image: "",
  title: "",
  username: "",
};
const loginFormUrl: I_OLoginForm = {
 sendFormUrl: "endpoint"
};

describe("Deve renderizar o t-login, corretamente", () => {
  // ==================================================
  it("Deve renderizar o o-login-title", () => {
    // Arrange
    render(<T_Login loginTitleProps={loginTitleProps} loginFormUrl={loginFormUrl} />);

    // Act
    const get_o_login_title = screen.getByTestId("o-login-title");

    // Assert
    expect(get_o_login_title).toBeInTheDocument();
  });
  // ==================================================
  it("Deve renderizar o o-login-form", () => {
    // Arrange
    render(<T_Login loginTitleProps={loginTitleProps} loginFormUrl={loginFormUrl} />);

    // Act
    const get_o_login_form = screen.getByTestId("o-login-form");

    // Assert
    expect(get_o_login_form).toBeInTheDocument();
  });

  // ==================================================
  it("Deve preservar a estrutura visual do componente", () => {
    const get_t_login = renderer
      .create(<T_Login loginTitleProps={loginTitleProps} loginFormUrl={loginFormUrl} />)
      .toJSON();

    expect(get_t_login).toMatchSnapshot();
    // ==================================================
  });
});
