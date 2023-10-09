import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "@/utils/tests/app-router-ctx-provider-mock";

// Organism
import { O_LoginForm } from "../o-login-form";

it("Deve submeter o formulario corretamente", async () => {
  // Arrange

  const fake_user_data = {
    email: "matheusgomes1203@hotmail.com",
    password: "1234567",
  };

  const handleLoginForm = jest.fn();
  const push = jest.fn();

  render(
    <AppRouterContextProviderMock router={{ push }}>
      <O_LoginForm handleLoginForm={handleLoginForm} />
    </AppRouterContextProviderMock>
  );

  const user = userEvent.setup();

  // Act
  const get_a_input_email = screen.getByTestId("a-input-email");
  const get_a_input_password = screen.getByTestId("a-input-password");
  const get_a_button = screen.getByTestId("a-button");

  await user.type(get_a_input_email, fake_user_data.email);
  await user.type(get_a_input_password, fake_user_data.password);
  await user.click(get_a_button);

  // Assert
  await waitFor(() => {
    expect(handleLoginForm).toBeCalledTimes(1);
  });
});
