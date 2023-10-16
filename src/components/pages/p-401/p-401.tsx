// Template
import { I_OFooter, O_Footer } from "@/components/organism/o-footer/o-footer";
import { I_OHeader, O_Header } from "@/components/organism/o-header/o-header";
import { T_401 } from "@/components/templates/t-401/t-401";

export interface I_P401 {
  o_headerProps: I_OHeader;
  t_401Props: {
    handleLogin: () => void;
  };
  o_footerProps: I_OFooter;
}

export const P_401 = ({ o_headerProps, t_401Props, o_footerProps }: I_P401) => {
  return (
    <>
      <O_Header image={o_headerProps.image} />

      <main data-testid="p-401">
        <T_401 handleLogin={t_401Props.handleLogin} />
      </main>

      <O_Footer
        name={o_footerProps.name}
        site={o_footerProps.site}
        github={o_footerProps.github}
        linkedin={o_footerProps.linkedin}
      />
    </>
  );
};
