import React from 'react';

import styles from './Footer.module.scss';

import { Link, Icon } from '@/components/atoms';

interface FooterProps {
    name: string;
    site: string;
    github: string;
    linkedin: string;
}

const Footer: React.FC<FooterProps> = ({ name, site, github, linkedin }) => {
    const date = new Date();

    return (
        <div className={styles.footer} id="o-footer">
            <div className={styles.footer__name}>
                <p>
                    © {date.getFullYear()}
                    <Link href={site}>{name}.</Link>
                </p>
            </div>

            <div className={styles.footer__icons}>
                <Link href={github}>
                    <Icon icon="pi-github" />
                </Link>

                <Link href={linkedin}>
                    <Icon icon="pi-linkedin" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
