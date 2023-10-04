import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Organism
import { O_LoginTitle } from "./o-login-title";

describe("Deve renderizar o o-login-title, corretamente", () => {
  // ========================================
  it("Deve renderizar o a-avatar", () => {});
  // ========================================

  it("Deve renderizar o a-title", () => {});
  // ========================================

  it("Deve renderizar o a-text", () => {});
  // ========================================

  it("Deve preservar a estrutura visual do componente", () => {
    const get_o_login_title = renderer
      .create(
        <O_LoginTitle
          image=""
          title="NextJS: Auth + JWT"
          username="@matheusgomesdev"
        />
      )
      .toJSON();

    expect(get_o_login_title).toMatchSnapshot();
  });
  // ========================================
});
