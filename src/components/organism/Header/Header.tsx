import styles from './Header.module.scss';

import { useTheme } from '@/core/hooks/useTheme';

import { A_Avatar, A_Button } from '@/components/atoms';
import { A_Link } from '@/components/atoms/a-link/a-link';
import { A_Icon } from '@/components/atoms/a-icon/a-icon';

interface HeaderProps {
    link: string;
    image: string;
}

const Header = ({ link, image }: HeaderProps) => {
    const theme = useTheme();

    return (
        <header data-testid="header" className={styles.header} id="header">
            <A_Link href={link}>
                <A_Avatar image={image} label={''} shape="circle" />
            </A_Link>
            <A_Button variant="transparent" onClick={theme.toggleTheme}>
                <A_Icon icon="pi-sun" />
            </A_Button>
        </header>
    );
};

export default Header;
