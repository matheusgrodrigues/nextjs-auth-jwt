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
  return (
    <div className={styles.m_checkboxWithLabel} data-testid="m-checkboxWithLabel">
      <A_Checkbox id="a-checkbox" checked={checked} {...props} />
      <A_Label
        onClick={() => {
          const get_checkbox = document.getElementById("a-checkbox");

          if (get_checkbox) {
            get_checkbox.click();
          }
        }}
      >
        {labelText}
      </A_Label>
    </div>
  );
};
