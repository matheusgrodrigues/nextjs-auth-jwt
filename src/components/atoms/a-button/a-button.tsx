import { Button, ButtonProps } from "primereact/button";

import styles from "./a-button.module.css";

export const AButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      data-testid="a-button"
      pt={{
        root: {
          className: styles.a_button,
        },
      }}
      unstyled
      {...props}

    >
      {children}
    </Button>
  );
};
