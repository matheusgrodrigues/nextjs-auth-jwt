import React from 'react';

import * as PrBlockUI from 'primereact/blockui';

interface BlockUIProps extends PrBlockUI.BlockUIProps {}

const BlockUI: React.FC<BlockUIProps> = ({ ...props }) => <BlockUI {...props} />;

export default BlockUI;
