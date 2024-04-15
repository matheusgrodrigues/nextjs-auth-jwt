import React from 'react';

import { InputTextProps } from 'primereact/inputtext';

import styles from './InputWithLabel.module.css';

import { Label, Input } from '../../atoms';

import BaseField from '@/core/components/Field/Field';

interface InputWithLabelProps extends InputTextProps {
    labelText: string;
    type: React.HTMLInputTypeAttribute;
    name: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ labelText, type, name, placeholder, ...props }) => {
    return (
        <div
            className={styles.input_label}
            data-testid={`${name ? `input-with-label-${name}-testid` : 'input-with-label-testid'}`}
        >
            <Label htmlFor={name}>{labelText}</Label>

            <BaseField
                name={name}
                type={type}
                render={<Input type={type} name={name} placeholder={placeholder} {...props} />}
            />
        </div>
    );
};

export default InputWithLabel;
