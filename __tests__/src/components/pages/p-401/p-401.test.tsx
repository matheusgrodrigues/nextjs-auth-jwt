import renderer from "react-test-renderer";

// Page
import { P_401 } from "@/components/pages/p-401/p-401";

describe("Deve renderizar a pagina 401 corretamenta", () => {
  it("Deve preservar a estrutura da pagina p-401", () => {
    const three = renderer.create(
      <P_401
        t_401Props={{
          handleLogin: () => null,
        }}
      />
    );

    expect(three).toMatchSnapshot();
  });
});
