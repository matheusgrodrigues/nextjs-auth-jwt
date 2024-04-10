import React from 'react';

import styles from './Title.module.scss';

interface TitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    variant: 'h1' | 'h2' | 'fwSB-fs48-lh60-lspN2-gray900';
    'data-testid'?: string;
}

const Title: React.FC<TitleProps> = ({ variant, children, ...props }) => {
    return (
        <>
            {variant === 'h1' && (
                <h1 data-testid="title-testid" className={styles.title__h1} {...props}>
                    {children}
                </h1>
            )}

            {variant === 'h2' && (
                <h2 data-testid="title-testid" className={styles.title__h2} {...props}>
                    {children}
                </h2>
            )}

            {variant === 'fwSB-fs48-lh60-lspN2-gray900' && (
                <h2 data-testid="title-testid" className={styles.title__fwSb_fs48_lh60_lspN2_gray900} {...props}>
                    {children}
                </h2>
            )}
        </>
    );
};

export default Title;
