import React from 'react';

import { LabelHTMLAttributes, ReactNode } from 'react';

import styles from './Label.module.scss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    return (
        <label className={styles.label} {...props}>
            {children}
        </label>
    );
};

export default Label;
