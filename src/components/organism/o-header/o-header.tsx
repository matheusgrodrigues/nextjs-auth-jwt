// StyleSheet
import styles from "./o-header.module.scss";

// Atoms
import { A_Avatar, A_Button } from "@/components/atoms";
import { A_Link } from "@/components/atoms/a-link/a-link";
import { A_Icon } from "@/components/atoms/a-icon/a-icon";

// Hooks
import { useTheme } from "@/hooks/theme/useTheme";

export interface I_OHeader {
  link: string;
  image: string;
}

export const O_Header = ({ link, image }: I_OHeader) => {
  const theme = useTheme();

  return (
    <header data-testid="o-header" className={styles.o_header} id="o-header">
      <A_Link href={link}>
        <A_Avatar image={image} label={""} shape="circle" />
      </A_Link>
      <A_Button variant="transparent" onClick={theme.toggleTheme}>
        <A_Icon icon="pi-sun" />
      </A_Button>
    </header>
  );
};
