import { Checkbox, CheckboxProps } from "primereact/checkbox";

import "./a-checkbox.module.css";

interface ICheckbox extends CheckboxProps {
  checked: boolean;
}

export const ACheckbox = ({ checked, ...props }: ICheckbox) => {
  return (
    <Checkbox
      data-testid="a-checkbox"
      checked={checked}
      pt={{
        root: {
          className: "p-checkbox",
        },
        input: {
          className: checked ? "p-checkbox-box p-highlight" : "p-checkbox-box",
        },
        icon: {
          className: "p-checkbox-icon",
        },
      }}
      unstyled
      {...props}
    />
  );
};
