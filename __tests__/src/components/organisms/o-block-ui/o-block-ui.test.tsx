import renderer from "react-test-renderer";

// Organism
import { O_BlockUI } from "@/components/organism/o-block-ui/o-block-ui";

describe("Deve renderizar o block ui corretamente", () =>
  it("Deve preservar a estrutura visual do componente", () => {
    const three = renderer.create(<O_BlockUI icon="pi-spin pi-cog" />).toJSON();

    expect(three).toMatchSnapshot();
  }));
