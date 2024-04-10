import React from 'react';

import * as PrButton from 'primereact/button';

import styles from './Button.module.scss';

interface ButtonProps extends PrButton.ButtonProps {
    'data-testid'?: string;
    variant: 'fwMd-fs16-colGray700-bgWhite' | 'gradient' | 'transparent';
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
    return (
        <>
            {variant === 'transparent' && (
                <PrButton.Button data-testid="button-testid" {...props} className={styles.button}>
                    {children}
                </PrButton.Button>
            )}

            {variant === 'fwMd-fs16-colGray700-bgWhite' && (
                <PrButton.Button
                    data-testid="button-testid"
                    {...props}
                    className={styles.button__fwMd_fs16_colGray700_bgWhite}
                >
                    {children}
                </PrButton.Button>
            )}

            {variant === 'gradient' && (
                <PrButton.Button data-testid="button-testid" {...props} className={styles.button__gradient}>
                    {children}
                </PrButton.Button>
            )}
        </>
    );
};

export default Button;
