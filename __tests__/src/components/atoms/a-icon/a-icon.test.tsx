import renderer from "react-test-renderer";

// Atoms
import { A_Icon } from "@/components/atoms/a-icon/a-icon";

describe("Deve renderizar os icones corretamente", () => {
  it("Deve preservar a estrutura visual do icone", () => {
    const three = renderer.create(<A_Icon icon="pi-lock" />).toJSON();

    expect(three).toMatchSnapshot();
  });
});
