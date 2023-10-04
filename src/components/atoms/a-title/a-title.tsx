import { HTMLAttributes } from "react";

import styles from "./a-title.module.css";

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2";
}

export const ATitle = ({ variant, children, ...props }: ITitle) => {
  return (
    <>
      {variant === "h1" && (
        <h1 className={`${styles.title} ${styles.title_h1}`} {...props}>
          {children}
        </h1>
      )}
      {variant === "h2" && (
        <h2 className={`${styles.title} ${styles.title_h2}`} {...props}>
          {children}
        </h2>
      )}
    </>
  );
};
