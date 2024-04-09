import { Dialog, DialogProps } from 'primereact/dialog';

// StyleSheet
import styles from './m-dialog.module.css';

export interface I_MDialog extends DialogProps {
    'data-testid'?: string;
}

export const M_Dialog = ({ children, ...props }: I_MDialog) => {
    return (
        <Dialog
            pt={{
                root: {
                    'data-testid': 'm-dialog',
                    className: styles.m_dialog,
                },
                mask: {
                    className: styles.m_dialog__mask,
                },
            }}
            {...props}
        >
            {children}
        </Dialog>
    );
};
