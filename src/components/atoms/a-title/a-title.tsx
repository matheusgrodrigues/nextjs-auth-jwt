import { HTMLAttributes } from "react";

import styles from "./a-title.module.css";

interface I_ATitle extends HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2";
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
    </>
  );
};
