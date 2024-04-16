import React from 'react';

import styles from './Header.module.scss';

import useTheme from '@/core/hooks/useTheme';

import { Avatar, Button, Link, Icon } from '@/components/atoms';

const Header: React.FC = () => {
    const theme = useTheme();

    return (
        <header data-testid="header" className={styles.header} id="header">
            <Link href="https://github.com/matheusgrodrigues">
                <Avatar data-testid="avatar-testid" image="/images/a-avatar.jpeg" label={''} shape="circle" />
            </Link>
            <Button variant="transparent" onClick={theme.toggleTheme}>
                <Icon icon="pi-sun" />
            </Button>
        </header>
    );
};

export default Header;
