// Interfaces
import { I_OFooter, O_Footer } from "@/components/organism/o-footer/o-footer";
import { I_OHeader, O_Header } from "@/components/organism/o-header/o-header";

// StyleSheet
import styles from "./p-401.module.scss";

// Template
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
    <main data-testid="p-401" className={styles.p_401}>
      <O_Header image={o_headerProps.image} link={o_headerProps.link} />

      <T_401 handleLogin={t_401Props.handleLogin} />

      <O_Footer
        name={o_footerProps.name}
        site={o_footerProps.site}
        github={o_footerProps.github}
        linkedin={o_footerProps.linkedin}
      />
    </main>
  );
};
