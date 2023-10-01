import { AvatarProps, Avatar as PrAvatar } from "primereact/avatar";

import styles from "./a-avatar.module.scss";

export const Avatar = ({ ...props }: AvatarProps) => {
  return (
    <PrAvatar
      pt={{
        label: {
          className: styles.avatar_label,
        },
      }}
      {...props}
    />
  );
};
