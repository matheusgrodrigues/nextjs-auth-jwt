import { HTMLAttributes } from "react";

// StyleSheet
import styles from "./a-text.module.css";

type T_AText = "error";

interface I_AText extends HTMLAttributes<HTMLParagraphElement> {
  type?: T_AText;
}

export const A_Text = ({ type, children, ...props }: I_AText) => {
  let a_text_class = styles.a_text;

  if (type === "error") {
    a_text_class = `${styles.a_text} ${styles.a_text__error}`;
  }

  return (
    <p data-testid="a-text" className={a_text_class} {...props}>
      {children}
    </p>
  );
};
