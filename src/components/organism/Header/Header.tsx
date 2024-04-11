import React from 'react';

import styles from './Header.module.scss';

import useTheme from '@/core/hooks/useTheme';

import { Avatar, Button, Link, Icon } from '@/components/atoms';

interface HeaderProps {
    link: string;
    image: string;
}

const Header: React.FC<HeaderProps> = ({ link, image }) => {
    const theme = useTheme();

    return (
        <header data-testid="header" className={styles.header} id="header">
            <Link href={link}>
                <Avatar image={image} label={''} shape="circle" />
            </Link>
            <Button variant="transparent" onClick={theme.toggleTheme}>
                <Icon icon="pi-sun" />
            </Button>
        </header>
    );
};

export default Header;
