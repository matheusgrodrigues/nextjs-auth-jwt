import renderer from "react-test-renderer";

// Atoms
import { A_Text } from "./a-text";

describe("Deve renderizar o a-text, corretamente", () => {
  it("Deve preservar a estrutura visual do a-text", () => {
    const a_text_label = "";
    const get_a_text = renderer
      .create(<A_Text>{a_text_label}</A_Text>)
      .toJSON();

    expect(get_a_text).toMatchSnapshot();
  });
});
