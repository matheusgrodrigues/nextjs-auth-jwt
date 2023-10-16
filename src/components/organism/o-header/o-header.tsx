import { A_Icon } from "@/components/atoms/a-icon/a-icon";
import styles from "./o-header.module.scss";

// Atoms
import { A_Avatar, A_Button } from "@/components/atoms";

export interface I_OHeader {
  image: string;
}

export const O_Header = ({ image }: I_OHeader) => {
  return (
    <header data-testid="o-header" className={styles.o_header}>
      <A_Avatar image={image} label={""} shape="circle" />
      <A_Button variant="transparent">
        <A_Icon icon="pi-sun" />
      </A_Button>
    </header>
  );
};
