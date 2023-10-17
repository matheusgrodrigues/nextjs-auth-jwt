// Templates
import { T_Welcome } from "@/components/templates";

// StyleSheet
import styles from "./p-welcome.module.scss";

// Organism and Interfaces
import { I_TWelcome } from "@/components/templates/t-welcome/t-welcome";
import { I_OFooter, O_Footer } from "@/components/organism/o-footer/o-footer";
import { I_OHeader, O_Header } from "@/components/organism/o-header/o-header";

export interface I_PWelcome {
  o_headerProps: I_OHeader;

  t_WelcomeProps: I_TWelcome;
  o_footerProps: I_OFooter;
}

export const P_Welcome = ({ o_headerProps, t_WelcomeProps, o_footerProps }: I_PWelcome) => {
  return (
    <section className={styles.p_welcome}>
      <O_Header image={o_headerProps.image} link={o_headerProps.link} />

      <T_Welcome {...t_WelcomeProps} />

      <O_Footer
        name={o_footerProps.name}
        site={o_footerProps.site}
        github={o_footerProps.github}
        linkedin={o_footerProps.linkedin}
      />
    </section>
  );
};
