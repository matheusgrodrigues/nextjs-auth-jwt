import { InputTextProps, InputText } from "primereact/inputtext";

import styles from "./a-input.module.css";

export const A_Input = ({ ...props }: InputTextProps) => {
  const { name } = props;
  return (
    <InputText
      data-testid={name ? `a-input-${name}` : "a-input"}
      pt={{
        root: {
          className: styles.a_input,
        },
      }}
      {...props}
    />
  );
};
