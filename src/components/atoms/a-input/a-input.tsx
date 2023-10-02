import { HTMLInputTypeAttribute } from "react";

import { InputTextProps, InputText as PrInputText } from "primereact/inputtext";

import styles from "./a-input.module.css";

interface IInput extends InputTextProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
}

export const AInput = ({ type, placeholder, ...props }: IInput) => {
  return (
    <PrInputText
      data-testid="a-input"
      type={type}
      placeholder={placeholder}
      pt={{
        root: {
          className: styles.a_input,
        },
      }}
      unstyled={true}
      {...props}
    />
  );
};
