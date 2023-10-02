import { HTMLAttributes, ReactNode } from "react";

import styles from "./a-label.module.css";

interface ILabel extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const ALabel = ({ children, ...props }: ILabel) => {
  return (
    <label data-testid="a-label" className={styles.a_label} {...props}>
      {children}
    </label>
  );
};
