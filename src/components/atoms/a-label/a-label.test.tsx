import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


// Atoms
import { ALabel } from "..";

describe("Deve renderizar o a-label corretamente", () => {
    it("Deve renderizar o a-label com texto", () => {
        // Arrange
        const text = "Texto do a-label";
        render(<ALabel>{text}</ALabel>);

        // Act
        const get_label = screen.getByTestId("a-label");

        // Assert
        expect(get_label).toBeInTheDocument();
        expect(get_label.textContent).not.toHaveLength(0);
    })
});