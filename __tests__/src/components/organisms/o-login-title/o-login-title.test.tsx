import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Organism
import { O_LoginTitle } from "../../../../../src/components/organism/o-login-title/o-login-title";

describe("Deve renderizar o o-login-title, corretamente", () => {
  // ========================================

  it("Deve renderizar o a-title", () => {
    // Arrange
    render(<O_LoginTitle image="" title="" userSession={undefined} />);

    // Act
    const get_a_title = screen.getByTestId("a-title");

    // Assert

    expect(get_a_title).toBeInTheDocument();
  });
  // ========================================

  it("Deve renderizar o a-text", () => {
    // Arrange
    render(<O_LoginTitle image="" title="" userSession={undefined} />);

    // Act
    const get_a_text = screen.getByTestId("a-text");

    // Assert

    expect(get_a_text).toBeInTheDocument();
  });
  // ========================================

  it("Deve preservar a estrutura visual do componente", () => {
    const get_o_login_title = renderer
      .create(<O_LoginTitle image="" title="NextJS: Auth + JWT" username={undefined} />)
      .toJSON();

    expect(get_o_login_title).toMatchSnapshot();
  });
  // ========================================
});
