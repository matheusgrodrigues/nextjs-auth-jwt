import { Button, ButtonProps } from "primereact/button";

import styles from "./a-button.module.scss";

interface I_AButton extends ButtonProps {
  "data-testid"?: string;
  variant: "fwMd-fs16-colGray700-bgWhite" | "gradient" | "transparent";
}

export const A_Button = ({ variant, children, ...props }: I_AButton) => {
  return (
    <>
      {variant === "transparent" && (
        <Button data-testid="a-button" {...props} className={styles.a_button}>
          {children}
        </Button>
      )}

      {variant === "fwMd-fs16-colGray700-bgWhite" && (
        <Button data-testid="a-button" {...props} className={styles.a_button__fwMd_fs16_colGray700_bgWhite}>
          {children}
        </Button>
      )}

      {variant === "gradient" && (
        <Button data-testid="a-button" {...props} className={styles.a_button__gradient}>
          {children}
        </Button>
      )}
    </>
  );
};
