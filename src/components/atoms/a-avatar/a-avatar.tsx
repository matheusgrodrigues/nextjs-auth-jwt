import { AvatarProps, Avatar as PrAvatar } from "primereact/avatar";

interface I_AAvatar extends AvatarProps {
  image: string;
  shape: "square" | "circle";
  label: string;
}

export const A_Avatar = ({ image, size, shape, label, ...props }: I_AAvatar) => {
  return <PrAvatar label={label} data-testid="a-avatar" image={image} shape={shape} {...props} />;
};
