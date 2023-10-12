import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Atoms
import { A_Checkbox } from "../../../../../src/components/atoms/a-checkbox/a-checkbox";

describe("Deve renderizar o a-checkbox corretamente", () => {
  it("Deve renderizar o a-checkbox na tela", () => {
    // Arrange
    render(<A_Checkbox checked={false} />);

    // Act
    const get_checkbox = screen.getByTestId("a-checkbox");

    // Assert
    expect(get_checkbox).toBeInTheDocument();
  });
});
