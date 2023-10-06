import { HTMLAttributes } from "react";

// StyleSheet
import styles from "./a-text.module.css";

type T_AText = "error" | "primary-semibold";

interface I_AText extends HTMLAttributes<HTMLParagraphElement> {
  variant?: T_AText;
  "data-testid"?: string;
}

export const A_Text = ({ variant, children, ...props }: I_AText) => {
  let a_text_class = styles.a_text;

  if (variant === "error") {
    a_text_class = `${styles.a_text} ${styles.a_text__error}`;
  } else if (variant === "primary-semibold") {
    a_text_class = `${styles.a_text} ${styles.a_text__primarySemibold}`;
  }

  return (
    <p data-testid="a-text" className={a_text_class} {...props}>
      {children}
    </p>
  );
};
