import { Button, ButtonProps } from "primereact/button";

import styles from "./a-button.module.css";

interface I_AButton extends ButtonProps {
  "data-testid"?: string;
}

export const A_Button = ({ children, ...props }: I_AButton) => {
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
