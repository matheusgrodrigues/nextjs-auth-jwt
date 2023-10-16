// StyleSheet
import styles from "./o-footer.module.scss";

// Atoms
import { A_Icon } from "@/components/atoms/a-icon/a-icon";
import { A_Link } from "@/components/atoms/a-link/a-link";

export interface I_OFooter {
  name: string;
  site: string;
  github: string;
  linkedin: string;
}

export const O_Footer = ({ name, site, github, linkedin }: I_OFooter) => {
  const date = new Date();

  return (
    <footer className={styles.o_footer}>
      <div className={styles.o_footer__name}>
        <p>
          © {date.getFullYear()}
          <A_Link href={site}>{name}</A_Link>.
        </p>
      </div>

      <div className={styles.o_footer__icons}>
        <A_Link href={github}>
          <A_Icon icon="pi-github" />
        </A_Link>

        <A_Link href={linkedin}>
          <A_Icon icon="pi-linkedin" />
        </A_Link>
      </div>
    </footer>
  );
};
