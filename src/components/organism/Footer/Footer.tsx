import styles from "./o-footer.module.scss";

import { A_Icon } from "@/components/atoms/a-icon/a-icon";
import { A_Link } from "@/components/atoms/a-link/a-link";

interface FooterProps {
  name: string;
  site: string;
  github: string;
  linkedin: string;
}

const Footer = ({ name, site, github, linkedin }: FooterProps) => {
  const date = new Date();

  return (
    <div className={styles.footer} id="o-footer">
      <div className={styles.footer__name}>
        <p>
          © {date.getFullYear()}
          <A_Link href={site}>{name}.</A_Link>
        </p>
      </div>

      <div className={styles.footer__icons}>
        <A_Link href={github}>
          <A_Icon icon="pi-github" />
        </A_Link>

        <A_Link href={linkedin}>
          <A_Icon icon="pi-linkedin" />
        </A_Link>
      </div>
    </div>
  );
};

export default Footer;
