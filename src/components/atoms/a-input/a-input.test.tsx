import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Atoms
import { AInput } from "./a-input";

describe("Deve renderizar o input corretamente", () => {
  it("Deve renderizar o input com o type", () => {
    // Arrange
    render(<AInput type="email" name="" placeholder="" />);

    // Act
    const get_input = screen.getByTestId("a-input");

    // Assert
    expect(get_input).toBeInTheDocument();
    expect(get_input).toHaveAttribute("type");
    expect(get_input.getAttribute("type")).not.toHaveLength(0);
});
it("Deve renderizar o input com o name", () => {
    // Arrange
    render(<AInput type="" name="email" placeholder="" />);

    // Act
    const get_input = screen.getByTestId("a-input");

    // Assert
    expect(get_input).toBeInTheDocument();
    expect(get_input).toHaveAttribute("name");
    expect(get_input.getAttribute("name")).not.toHaveLength(0);
});
it("Deve renderizar o input com o placeholder", () => {
    // Arrange
    const placeholder_text = "Placeholder e-mail";
    render(<AInput type="" name="" placeholder={placeholder_text} />);

    // Act
    const get_input = screen.getByTestId("a-input");

    // Assert
    expect(get_input).toBeInTheDocument();
    expect(get_input).toHaveAttribute("placeholder");
    expect(get_input.getAttribute("placeholder")).not.toHaveLength(0);
});
});
