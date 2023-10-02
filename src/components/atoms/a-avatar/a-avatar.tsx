import { AvatarProps, Avatar as PrAvatar } from "primereact/avatar";

import styles from "./a-avatar.module.css";

export const AAvatar = ({ ...props }: AvatarProps) => {
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
      {...props}
    />
  );
};
