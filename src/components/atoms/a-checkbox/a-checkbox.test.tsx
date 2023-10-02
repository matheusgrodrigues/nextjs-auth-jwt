import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Atoms
import { ACheckbox } from "./a-checkbox";

describe("Deve renderizar o a-checkbox corretamente", () => {
  it("Deve renderizar o a-checkbox na tela", () => {
    // Arrange
    render(<ACheckbox checked={false} />);

    // Act
    const get_checkbox = screen.getByTestId("a-checkbox");

    // Assert
    expect(get_checkbox).toBeInTheDocument();
  });
});
