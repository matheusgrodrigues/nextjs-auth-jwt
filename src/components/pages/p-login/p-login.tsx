// StyleSheet
import styles from "./p-login.module.scss";

// Interfaces
import { I_TLogin } from "@/components/templates/t-login/t-login";

// Templates
import { T_Login } from "@/components/templates";

// Organism
import { I_OHeader, O_Header } from "@/components/organism/o-header/o-header";
import { I_OFooter, O_Footer } from "@/components/organism/o-footer/o-footer";

interface I_PHome {
  o_headerProps: I_OHeader;
  t_loginProps: I_TLogin;
  o_footerProps: I_OFooter;
}

export const P_Home = ({ o_headerProps, t_loginProps, o_footerProps }: I_PHome) => {
  return (
    <>
      <O_Header image={o_headerProps.image} />

      <main data-testid="p-home" className={styles.p_home}>
        <T_Login o_loginTitle={t_loginProps.o_loginTitle} handleLoginForm={t_loginProps.handleLoginForm} />
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
