import renderer from "react-test-renderer";

// Atoms
import { A_Avatar } from "@/components/atoms";

describe("Deve renderizar o a-avatar corretamente", () => {
  it("Deve preservar a estrutura visual do componente", () => {
    const get_a_avatar = renderer.create(<A_Avatar image="" size="normal" shape="circle" />).toJSON();

    expect(get_a_avatar).toMatchSnapshot();
  });
});
