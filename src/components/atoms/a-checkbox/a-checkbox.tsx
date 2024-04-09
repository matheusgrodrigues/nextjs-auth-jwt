import { Checkbox, CheckboxProps } from 'primereact/checkbox';

interface I_Checkbox extends CheckboxProps {
    checked: boolean;
}

export const A_Checkbox = ({ checked, ...props }: I_Checkbox) => {
    return <Checkbox data-testid="a-checkbox" checked={checked} {...props} />;
};
