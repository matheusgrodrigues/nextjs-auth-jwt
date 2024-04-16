import React from 'react';

import * as PrDialogProps from 'primereact/dialog';

import styles from './Dialog.module.css';

interface DialogProps extends PrDialogProps.DialogProps {}

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
    return (
        <PrDialogProps.Dialog
            pt={{
                root: {
                    'data-testid': 'dialog-testid',
                    className: styles.dialog,
                },
                mask: {
                    className: styles.dialog__mask,
                },
            }}
            {...props}
        >
            {children}
        </PrDialogProps.Dialog>
    );
};

export default Dialog;
