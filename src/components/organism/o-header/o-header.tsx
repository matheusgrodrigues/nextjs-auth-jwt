import { A_Icon } from "@/components/atoms/a-icon/a-icon";
import styles from "./o-header.module.scss";

// Atoms
import { A_Avatar, A_Button } from "@/components/atoms";
import { A_Link } from "@/components/atoms/a-link/a-link";

export interface I_OHeader {
  link: string;
  image: string;
}

export const O_Header = ({ link, image }: I_OHeader) => {
  return (
    <header data-testid="o-header" className={styles.o_header}>
      <A_Link href={link}>
        <A_Avatar image={image} label={""} shape="circle" />
      </A_Link>
      <A_Button variant="transparent">
        <A_Icon icon="pi-sun" />
      </A_Button>
    </header>
  );
};
