import { Checkbox, CheckboxProps } from "primereact/checkbox";

import "./a-checkbox.module.css";

interface I_Checkbox extends CheckboxProps {
  checked: boolean;
}

export const A_Checkbox = ({ checked, ...props }: I_Checkbox) => {
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
        hiddenInput: {
          "data-testid": "a-checkbox-input",

        }
      }}
      unstyled
      {...props}
    />
  );
};

/*
 * Melhorias para fazer.
 *
 * Por algum motivo a cor do checkbox com checked={true} está com a cor default do theme do primereact.
 *  - Nome da classe de active: .p-highlight
 *  - Cor do primereact: #6366F1.
 *  - Cor que precisa ficar: var(--primary-color) -> #7F56D9.
 * Já tentei diversas formas, mas ela não muda.
 * Se você tiver tempo e quiser realizar esta melhoria neste componente, sinta-se avontade : ).
 *
 * Matheus Gomes: 02/10/2023.
 *
 */
