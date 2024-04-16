import React from 'react';

import * as PrAvatar from 'primereact/avatar';

interface AvatarProps extends PrAvatar.AvatarProps {
    image: string;
    shape: 'square' | 'circle';
    label: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, shape, label, ...props }) => {
    return <PrAvatar.Avatar label={label} image={image} shape={shape} {...props} />;
};

export default Avatar;
