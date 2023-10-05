import { useState } from "react";

import { CheckboxProps } from "primereact/checkbox";

// Atoms
import { A_Checkbox, A_Label } from "@/components/atoms";

// StyleSheet
import styles from "./m-checkbox-with-label.module.css";

interface I_MCheckboxWithLabel extends CheckboxProps {
  checked: boolean;
  labelText: string;
}

export const M_CheckboxWithLabel = ({ checked, labelText, ...props }: I_MCheckboxWithLabel) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className={styles.m_checkboxWithLabel} data-testid="m-checkboxWithLabel">
      <A_Checkbox checked={isChecked} onClick={() => setIsChecked(!isChecked)} {...props} />
      <A_Label htmlFor="a-checkbox" onClick={() => setIsChecked(!isChecked)}>
        {labelText}
      </A_Label>
    </div>
  );
};
