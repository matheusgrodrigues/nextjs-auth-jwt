import React from 'react';

import styles from './Header.module.scss';

import useTheme from '@/core/hooks/useTheme';

import { Avatar, Button, Link, Icon } from '@/components/atoms';

const Header: React.FC = () => {
    const theme = useTheme();

    return (
        <header data-testid="header" className={styles.header} id="header">
            <Link href={'/images/a-avatar.jpeg'}>
                <Avatar image={'https://github.com/matheusgrodrigues'} label={''} shape="circle" />
            </Link>
            <Button variant="transparent" onClick={theme.toggleTheme}>
                <Icon icon="pi-sun" />
            </Button>
        </header>
    );
};

export default Header;
