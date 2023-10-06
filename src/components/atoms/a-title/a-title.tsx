import { HTMLAttributes } from "react";

import styles from "./a-title.module.css";

interface I_ATitle extends HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2" | "fwSB-fs48-lh60-lspN2-gray900";
  "data-testid"?: string;
}

export const A_Title = ({ variant, children, ...props }: I_ATitle) => {
  return (
    <>
      {variant === "h1" && (
        <h1 data-testid="a-title" className={`${styles.title} ${styles.title_h1}`} {...props}>
          {children}
        </h1>
      )}

      {variant === "h2" && (
        <h2 data-testid="a-title" className={`${styles.title} ${styles.title_h2}`} {...props}>
          {children}
        </h2>
      )}

      {variant === "fwSB-fs48-lh60-lspN2-gray900" && (
        <h2
          data-testid="a-title"
          className={`${styles.title} ${styles.title__fwSb_fs48_lh60_lspN2_gray900}`}
          {...props}
        >
          {children}
        </h2>
      )}
    </>
  );
};

/*
 * As classes das variants são compostas pela abreviação das tags
 *
 * ex:
 *
 * fwSB-fs48-lh60-lspN2-gray900
 *    font-weight: vaR(--fw-semibold);
 *    font-size: var(--fs-display-lg);
 *    line-height: var(--spacing-64);
 *    letter-spacing: -2%;
 *    color: var(--gray-900);
 */
