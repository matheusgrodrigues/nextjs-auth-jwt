import React from 'react';

import styles from './Link.module.scss';

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <a href={href} className={styles.link}>
            {children}
        </a>
    );
};

export default Link;
