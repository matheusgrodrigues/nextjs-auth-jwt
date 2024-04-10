import React from 'react';

import * as PrDialogProps from 'primereact/dialog';

import styles from './m-dialog.module.css';

interface DialogProps extends PrDialogProps.DialogProps {
    'data-testid'?: string;
}

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
    return (
        <Dialog
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
        </Dialog>
    );
};

export default Dialog;
