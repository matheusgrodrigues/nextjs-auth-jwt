import { Button, ButtonProps } from "primereact/button";

import styles from "./a-button.module.css";

export const A_Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      data-testid="a-button"
      {...props}
      pt={{
        root: {
          className: styles.a_button,
        },
      }}
    >
      {children}
    </Button>
  );
};
