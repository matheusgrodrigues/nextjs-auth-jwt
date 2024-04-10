import React from 'react';

import { InputTextProps, InputText } from 'primereact/inputtext';

const Input: React.FC<InputTextProps> = ({ ...props }) => (
    <InputText data-testid={props.name ? `input-${props.name}-testid` : 'input-testid'} {...props} />
);

export default Input;
