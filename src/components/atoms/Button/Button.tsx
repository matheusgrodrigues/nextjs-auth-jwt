import React, { forwardRef, useImperativeHandle, useState } from 'react';

import * as PrButton from 'primereact/button';

import styles from './Button.module.scss';

interface ButtonProps extends PrButton.ButtonProps {
    'data-testid'?: string;
    variant: 'fwMd-fs16-colGray700-bgWhite' | 'gradient' | 'transparent';
}

export interface ButtonRef {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.ForwardRefRenderFunction<ButtonRef, ButtonProps> = ({ variant, children, ...props }, ref) => {
    const [loading, setLoading] = useState(false);

    useImperativeHandle(ref, () => ({ setLoading }), []);

    return (
        <>
            {variant === 'transparent' && (
                <PrButton.Button data-testid="button-testid" {...props} loading={loading} className={styles.button}>
                    {loading ? '' : children}
                </PrButton.Button>
            )}

            {variant === 'fwMd-fs16-colGray700-bgWhite' && (
                <PrButton.Button
                    data-testid="button-testid"
                    {...props}
                    loading={loading}
                    className={styles.button__fwMd_fs16_colGray700_bgWhite}
                >
                    {loading ? '' : children}
                </PrButton.Button>
            )}

            {variant === 'gradient' && (
                <PrButton.Button
                    data-testid="button-testid"
                    {...props}
                    loading={loading}
                    className={styles.button__gradient}
                >
                    {loading ? '' : children}
                </PrButton.Button>
            )}
        </>
    );
};

export default forwardRef(Button);
