import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Molecules
import { M_Toast } from "../../../../../src/components/molecules/m-toast/m-toast";

describe("Deve renderizar o m-toast, corretamente", () => {
  it("Deve manter a estrutura visual do Toast", () => {
    const m_toast = renderer.create(<M_Toast />).toJSON();

    expect(m_toast).toMatchSnapshot();
  });
});
