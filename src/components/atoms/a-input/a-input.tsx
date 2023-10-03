import { InputTextProps, InputText } from "primereact/inputtext";

import styles from "./a-input.module.css";

export const A_Input = ({ ...props }: InputTextProps) => {
  return (
    <InputText
      data-testid="a-input"
      pt={{
        root: {
          className: styles.a_input,
        },
      }}
      {...props}
    />
  );
};
