import { render, screen } from "@testing-library/react";

// Atoms
import { AButton } from "./a-button";

describe("Deve renderizar o a-button corretamente", () => {
  it("Deve renderizar o botão com o texto", () => {
    // Arrange
    const text = "a-button";
    render(<AButton>{text}</AButton>);

    // Act
    const get_button = screen.getByTestId("a-button");

    // Assert
    expect(get_button).toBeInTheDocument();
    expect(get_button.textContent).not.toHaveLength(0);
  });
});
