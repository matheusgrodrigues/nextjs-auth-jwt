import styles from "./o-header.module.scss";

// Atoms
import { A_Avatar } from "@/components/atoms";

export const O_Header = () => {
  return (
    <header data-testid="o-header" className={styles.o_header}>
      <A_Avatar image={"/images/a-avatar.jpeg"} label={""} shape="circle" />
    </header>
  );
};
