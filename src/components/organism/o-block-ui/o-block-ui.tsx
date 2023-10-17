import { BlockUIProps, BlockUI } from "primereact/blockui";

export interface I_BlockUI extends BlockUIProps {}

export const O_BlockUI = ({ ...props }: I_BlockUI) => {
  return <BlockUI {...props} />;
};
