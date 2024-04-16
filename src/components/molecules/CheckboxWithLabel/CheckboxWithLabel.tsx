import React from 'react';

import { CheckboxProps } from 'primereact/checkbox';

import styles from './CheckboxWithLabel.module.scss';

import { Checkbox, Label } from '@/components/atoms';

import BaseField from '@/core/components/Field/Field';

interface CheckboxWithLabelProps extends CheckboxProps {
    labelText: string;
    name: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ labelText, name, ...props }) => {
    return (
        <div className={styles.checkboxWithLabel} data-testid="checkboxWithLabel-testid">
            <BaseField
                name={name}
                type="checkbox"
                render={<Checkbox id="checkbox" data-testid={`input-${name}-testid`} {...props} />}
            />

            <Label
                data-testid={`label-${name}-testid`}
                onClick={() => {
                    const get_checkbox = document.getElementById('checkbox');

                    if (get_checkbox) {
                        get_checkbox.click();
                    }
                }}
            >
                {labelText}
            </Label>
        </div>
    );
};

export default CheckboxWithLabel;
