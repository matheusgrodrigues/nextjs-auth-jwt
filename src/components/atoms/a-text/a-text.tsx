import { HTMLAttributes } from "react";

// StyleSheet
import styles from "./a-text.module.css";

type T_AText = "error" | "fwSb-fs16-primary" | "fwReg-fs20-lh30-gray500" | "fwReg-fs16-gray500";

interface I_AText extends HTMLAttributes<HTMLParagraphElement> {
  variant: T_AText;
  "data-testid"?: string;
}

export const A_Text = ({ variant, children, ...props }: I_AText) => {
  return (
    <>
      {variant === "error" && (
        <p data-testid="a-text" className={`${styles.a_text__error}`} {...props}>
          {children}
        </p>
      )}

      {variant === "fwSb-fs16-primary" && (
        <p data-testid="a-text" className={`${styles.a_text__fwSb_fs16_primary}`} {...props}>
          {children}
        </p>
      )}

      {variant === "fwReg-fs20-lh30-gray500" && (
        <p data-testid="a-text" className={`${styles.a_text__fwReg_fs20_lh30_gray500}`} {...props}>
          {children}
        </p>
      )}

      {variant === "fwReg-fs16-gray500" && (
        <p data-testid="a-text" className={`${styles.a_text__fwReg_fs16_gray500}`} {...props}>
          {children}
        </p>
      )}
    </>
  );
};
