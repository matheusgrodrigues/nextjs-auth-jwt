import React, { forwardRef, useImperativeHandle, useState } from 'react';

import * as PrBlockUI from 'primereact/blockui';

interface BlockUIProps extends PrBlockUI.BlockUIProps {}

export interface BlockUIRef {
    setIsBlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlockUI: React.ForwardRefRenderFunction<BlockUIRef, BlockUIProps> = ({ ...props }, ref) => {
    const [isBlocked, setIsBlocked] = useState(false);

    useImperativeHandle(ref, () => ({ setIsBlocked }), []);

    return <PrBlockUI.BlockUI {...props} blocked={isBlocked} />;
};

export default forwardRef(BlockUI);
