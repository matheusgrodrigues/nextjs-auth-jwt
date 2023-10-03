import renderer from "react-test-renderer";

// Atoms
import { A_Button } from "./a-button";

describe("Deve renderizar o a-button corretamente", () => {
  it("Deve preservar a estrutura visual do botão", () => {
    const text = "a-button";

    const get_a_button = renderer.create(<A_Button>{text}</A_Button>);

    expect(get_a_button).toMatchSnapshot();
  });
});
