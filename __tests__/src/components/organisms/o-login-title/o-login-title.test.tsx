import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import LoginTitle from "@/components/organism/o-login-title/LoginTitle";

describe("Deve renderizar o o-login-title, corretamente", () => {
  it("Deve renderizar o a-title", () => {
    render(<LoginTitle title="" />);

    const get_a_title = screen.getByTestId("a-title");

    expect(get_a_title).toBeInTheDocument();
  });

  it("Deve renderizar o a-text", () => {
    render(<LoginTitle title="" />);

    const get_a_text = screen.getByTestId("a-text");

    expect(get_a_text).toBeInTheDocument();
  });

  it("Deve preservar a estrutura visual do componente", () => {
    const get_login_title = renderer.create(<LoginTitle title="NextJS: Auth + JWT" />).toJSON();

    expect(get_login_title).toMatchSnapshot();
  });
});
