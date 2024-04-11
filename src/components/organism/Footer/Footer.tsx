import React from 'react';

import styles from './Footer.module.scss';

import { Link, Icon } from '@/components/atoms';

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <div className={styles.footer} id="footer">
            <div className={styles.footer__name}>
                <p>
                    © {date.getFullYear()}
                    <Link href={'https://matheusgomesdev.com.br'}>{'matheusgomesdev'}.</Link>
                </p>
            </div>

            <div className={styles.footer__icons}>
                <Link href={'https://github.com/matheusgrodrigues/nextjs-auth-jwt'}>
                    <Icon icon="pi-github" />
                </Link>

                <Link href={'https://www.linkedin.com/in/matheusgomes/'}>
                    <Icon icon="pi-linkedin" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
