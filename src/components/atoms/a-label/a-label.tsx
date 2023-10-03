import { LabelHTMLAttributes, ReactNode } from "react";

import styles from "./a-label.module.css";

interface I_Label extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const A_Label = ({ children, ...props }: I_Label) => {
  return (
    <label data-testid="a-label" className={styles.a_label} {...props}>
      {children}
    </label>
  );
};
