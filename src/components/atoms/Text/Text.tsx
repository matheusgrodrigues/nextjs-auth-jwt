import React from 'react';

import styles from './Text.module.scss';

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    variant: 'error' | 'fwSb-fs16-primary' | 'fwReg-fs20-lh30-gray500' | 'fwReg-fs16-gray500';
    'data-testid'?: string;
}

const Text: React.FC<TextProps> = ({ variant, children, ...props }) => {
    return (
        <>
            {variant === 'error' && (
                <p data-testid="text-testid" className={`${styles.text__error}`} {...props}>
                    {children}
                </p>
            )}

            {variant === 'fwSb-fs16-primary' && (
                <p data-testid="text-testid" className={`${styles.text__fwSb_fs16_primary}`} {...props}>
                    {children}
                </p>
            )}

            {variant === 'fwReg-fs20-lh30-gray500' && (
                <p data-testid="text-testid" className={`${styles.text__fwReg_fs20_lh30_gray500}`} {...props}>
                    {children}
                </p>
            )}

            {variant === 'fwReg-fs16-gray500' && (
                <p data-testid="text-testid" className={`${styles.text__fwReg_fs16_gray500}`} {...props}>
                    {children}
                </p>
            )}
        </>
    );
};

export default Text;
