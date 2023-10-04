import { HTMLAttributes } from "react";

// StyleSheet
import styles from "./a-text.module.css";

interface I_AText extends HTMLAttributes<HTMLParagraphElement> {}

export const A_Text = ({ children, ...props }: I_AText) => {
  return (
    <p data-testid="a-text" className={styles.a_text} {...props}>
      {children}
    </p>
  );
};
