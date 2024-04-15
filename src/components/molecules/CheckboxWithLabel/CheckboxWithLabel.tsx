import React from 'react';

import { CheckboxProps } from 'primereact/checkbox';

import styles from './CheckboxWithLabel.module.css';

import { Checkbox, Label } from '@/components/atoms';

import BaseField from '@/core/components/Field/Field';

interface CheckboxWithLabelProps extends CheckboxProps {
    labelText: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ labelText, ...props }) => {
    return (
        <div className={styles.checkboxWithLabel} data-testid="checkboxWithLabel-testid">
            <BaseField name={`${props.name}`} type="checkbox" render={<Checkbox id="checkbox" {...props} />} />

            <Label
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
