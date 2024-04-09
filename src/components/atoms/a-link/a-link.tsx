import { ReactNode } from 'react';

// StyleSheet
import styles from './a-link.module.css';

interface I_ALink {
    href: string;
    children: ReactNode;
}

export const A_Link = ({ href, children }: I_ALink) => {
    return (
        <a href={href} className={styles.a_link}>
            {children}
        </a>
    );
};
