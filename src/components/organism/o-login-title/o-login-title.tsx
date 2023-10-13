// Atoms
import { A_Avatar, A_Title, A_Text } from "@/components/atoms";

// StyleSheet
import styles from "./o-login-title.module.css";

// HOC
import { I_SessionHOC } from "@/services/sessionService/sessionService";

export interface I_OLoginTitle {
  image: string;
  title: string;
  userSession: I_SessionHOC | undefined;
}

export const O_LoginTitle = ({ image, title, userSession }: I_OLoginTitle) => {
  const session = userSession?.data.session;

  return (
    <div data-testid="o-login-title" className={styles.o_loginTitle}>
      <A_Avatar image={image} label={session?.username[0] || ""} shape="circle" />
      <A_Title variant="h2">{title}</A_Title>
      <A_Text variant="fwReg-fs16-gray500">{session?.username}</A_Text>
    </div>
  );
};
