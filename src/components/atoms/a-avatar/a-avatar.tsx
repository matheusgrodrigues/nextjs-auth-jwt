import { AvatarProps, Avatar as PrAvatar } from "primereact/avatar";

import styles from "./a-avatar.module.css";

interface I_AAvatar extends AvatarProps {
  image: string;
  size: "normal" | "large" | "xlarge";
  shape: "square" | "circle";
}

export const A_Avatar = ({ image, size, shape, ...props }: I_AAvatar) => {
  return (
    <PrAvatar
      pt={{
        root: {
          className: styles.avatar,
        },
        label: {
          className: styles.avatar_label,
        },
      }}
      image={image}
      size={size}
      shape={shape}
      {...props}
    />
  );
};
