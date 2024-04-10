import React from 'react';

import { CheckboxProps } from 'primereact/checkbox';

import styles from './CheckboxWithLabel.module.css';

import { Checkbox, Label } from '@/components/atoms';

interface CheckboxWithLabelProps extends CheckboxProps {
    checked: boolean;
    labelText: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ checked, labelText, ...props }) => {
    return (
        <div className={styles.checkboxWithLabel} data-testid="checkboxWithLabel-testid">
            <Checkbox id="checkbox" checked={checked} {...props} />
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
