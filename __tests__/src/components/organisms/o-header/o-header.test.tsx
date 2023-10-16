import renderer from "react-test-renderer";

// Organism
import { O_Header } from "@/components/organism/o-header/o-header";

describe("Deve renderizar o Header corretamente", () => {
  it("Deve preservar a estrutura visual do componente", () => {
    const three = renderer.create(<O_Header />).toJSON();

    expect(three).toMatchSnapshot();
  });
});
