import renderer from "react-test-renderer";

// Interface
import { I_OHeader } from "@/components/organism/o-header/o-header";
import { I_OFooter } from "@/components/organism/o-footer/o-footer";

// Page
import { P_401 } from "@/components/pages/p-401/p-401";

describe("Deve renderizar a pagina 401 corretamenta", () => {
  // Organism: Header
  const o_headerProps: I_OHeader = {
    link: "https://github.com/matheusgrodrigues",
    image: "/images/a-avatar.jpeg",
  };

  // Organism: Footer
  const o_footerProps: I_OFooter = {
    name: "matheusgomesdev",
    site: "https://matheusgomesdev.com.br",
    github: "https://github.com/matheusgrodrigues",
    linkedin: "https://www.linkedin.com/in/matheusgomes/",
  };

  it("Deve preservar a estrutura da pagina p-401", () => {
    const three = renderer.create(
      <P_401
        o_headerProps={o_headerProps}
        t_401Props={{
          handleLogin: () => null,
        }}
        o_footerProps={o_footerProps}
      />
    );

    expect(three).toMatchSnapshot();
  });
});
