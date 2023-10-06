// Atoms
import { A_Avatar, A_Title, A_Text } from "@/components/atoms";

// StyleSheet
import styles from "./o-login-title.module.css";

export interface I_OLoginTitle {
  image: string;
  title: string;
  username: string;
}

export const O_LoginTitle = ({ image, title, username }: I_OLoginTitle) => {
  return (
    <div data-testid="o-login-title" className={styles.o_loginTitle}>
      <A_Avatar
        image={image}
        label={username[0]}
        size="normal"
        shape="circle"
      />
      <A_Title variant="h1" className={styles.a_title}>
        {title}
      </A_Title>
      <A_Text variant="fwReg-fs16-gray500">{username}</A_Text>
    </div>
  );
};
