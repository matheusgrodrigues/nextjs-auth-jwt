import { Button, ButtonProps } from "primereact/button";

import styles from "./a-button.module.css";

interface I_AButton extends ButtonProps {
  "data-testid"?: string;
  variant: "fwMd-fs16-colGray700-bgWhite" | "gradient";
}

export const A_Button = ({ variant, children, ...props }: I_AButton) => {
  return (
    <>
      {variant === "fwMd-fs16-colGray700-bgWhite" && (
        <Button
          data-testid="a-button"
          {...props}
          pt={{
            root: {
              className: `${styles.a_button} ${styles.a_button__fwMd_fs16_colGray700_bgWhite}`,
            },
        
          }}
        >
          {children}
        </Button>
      )}

      {variant === "gradient" && (
        <Button
          data-testid="a-button"
          {...props}
          pt={{
            root: {
              className: `${styles.a_button} ${styles.a_button__gradient}`,
            },
          }}
        >
          {children}
        </Button>
      )}
    </>
  );
};
