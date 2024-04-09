import { InputTextProps, InputText } from 'primereact/inputtext';

export const A_Input = ({ ...props }: InputTextProps) => {
    const { name } = props;
    return <InputText data-testid={name ? `a-input-${name}` : 'a-input'} {...props} />;
};
