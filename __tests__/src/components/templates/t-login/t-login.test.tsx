import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Utils
import { AppRouterContextProviderMock } from "@/utils/test-utils";

// Interfaces
import { I_OLoginTitle } from "@/components/organism/o-login-title/o-login-title";

// Template
import { T_Login } from "../../../../../src/components/templates/Login/Login";

const o_loginTitle: I_OLoginTitle = {
  image: "",
  title: "",
  username: "",
};

const handleLoginForm = jest.fn();
const push = jest.fn();

describe("Deve renderizar o t-login, corretamente", () => {
  beforeEach(() => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <T_Login o_loginTitle={o_loginTitle} handleLoginForm={handleLoginForm} />
      </AppRouterContextProviderMock>
    );
  });
  // ==================================================
  it("Deve renderizar o o-login-title", () => {
    // Arrange

    // Act
    const get_o_login_title = screen.getByTestId("o-login-title");

    // Assert
    expect(get_o_login_title).toBeInTheDocument();
  });
  // ==================================================
  it("Deve renderizar o o-login-form", () => {
    // Arrange

    // Act
    const get_o_login_form = screen.getByTestId("o-login-form");

    // Assert
    expect(get_o_login_form).toBeInTheDocument();
  });

  // ==================================================
  it("Deve preservar a estrutura visual do componente", () => {
    const get_t_login = renderer
      .create(
        <AppRouterContextProviderMock router={{ push }}>
          <T_Login o_loginTitle={o_loginTitle} handleLoginForm={handleLoginForm} />
        </AppRouterContextProviderMock>
      )
      .toJSON();

    expect(get_t_login).toMatchSnapshot();
    // ==================================================
  });
});
