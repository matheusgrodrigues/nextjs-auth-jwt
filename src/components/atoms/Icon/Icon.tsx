import React from 'react';

import styles from './Icon.module.css';

interface IconProps {
    icon: 'pi-lock' | 'pi-github' | 'pi-linkedin' | 'pi-sun' | 'pi-spin pi-cog';
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    return <i className={`${styles.icon} pi ${icon}`}></i>;
};

export default Icon;
