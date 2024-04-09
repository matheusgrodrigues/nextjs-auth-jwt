import { render, screen } from "@testing-library/react";

import renderer from "react-test-renderer";

// Organism
import { O_Header } from "@/components/organism/header/o-header";

describe("Deve renderizar o Header corretamente", () => {
  // ========================================
  it("Deve renderizar o a-avatar, corretamente", () => {
    // Arrange
    render(<O_Header image="" />);

    // Act
    const get_a_avatar = screen.getByTestId("a-avatar");

    // Assert

    expect(get_a_avatar).toBeInTheDocument();
  });

  it("Deve preservar a estrutura visual do componente", () => {
    const three = renderer.create(<O_Header image="/images/avatar.jpeg" />).toJSON();

    expect(three).toMatchSnapshot();
  });
});
