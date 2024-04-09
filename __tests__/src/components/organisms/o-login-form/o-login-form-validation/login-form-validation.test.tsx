import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Test-utils
import { AppRouterContextProviderMock } from "@/core/utils/test-utils";

// Organism
import { O_LoginForm } from "../../../../../../src/components/organism/o-login-form/o-login-form";

// Mock AuthService
import { mockLoginValues } from "../../../../../../__mocks__/src/services/auth/authService";

describe("Deve logar o usuario corretamente", () => {
  const handleLoginForm = jest.fn();
  const push = jest.fn();

  beforeEach(() => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <O_LoginForm handleLoginForm={handleLoginForm} />
      </AppRouterContextProviderMock>
    );
  });

  // ======================================================================

  it("Deve submeter o formulario corretamente", async () => {
    // Arrange

    const user = userEvent.setup();

    // Act
    const get_a_input_email = screen.getByTestId("a-input-email");
    const get_a_input_password = screen.getByTestId("a-input-password");
    const get_a_button = screen.getByTestId("a-button");

    /* Desativei a simulação de preenchimento dos campos, porque estou setando o usuario
     *
     * teste no initialValues do formik, por padrão, para as pessoas testarem o sistema.
     *
     */

    // await user.type(get_a_input_email, mockLoginValues.identifier);
    // await user.type(get_a_input_password, mockLoginValues.password);

    await user.click(get_a_button);

    // Assert
    await waitFor(() => {
      expect(handleLoginForm).toBeCalledTimes(1);
    });
  });

  // =================================================
});
