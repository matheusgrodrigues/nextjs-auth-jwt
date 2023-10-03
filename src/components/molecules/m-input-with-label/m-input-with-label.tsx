import { HTMLInputTypeAttribute } from "react";

import { InputTextProps } from "primereact/inputtext";

// Atoms
import { A_Label, A_Input } from "../../atoms";

import styles from "./m-input-label.module.css";

interface I_MInputWithLabel extends InputTextProps {
  labelText: string;
  type: HTMLInputTypeAttribute;
  name: string;
}

export const M_InputWithLabel = ({
  labelText,
  type,
  name,
  placeholder,
  ...props
}: I_MInputWithLabel) => {
  return (
    <div className={styles.m_input_label} data-testid="m-input-label">
      <A_Label htmlFor={name}>{labelText}</A_Label>
      <A_Input type={type} name={name} placeholder={placeholder} {...props} />
    </div>
  );
};
