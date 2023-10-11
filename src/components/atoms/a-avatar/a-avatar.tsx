import { AvatarProps, Avatar as PrAvatar } from "primereact/avatar";

interface I_AAvatar extends AvatarProps {
  image: string;
  shape: "square" | "circle";
}

export const A_Avatar = ({ image, size, shape, ...props }: I_AAvatar) => {
  return <PrAvatar data-testid="a-avatar" image={image} shape={shape} {...props} />;
};
