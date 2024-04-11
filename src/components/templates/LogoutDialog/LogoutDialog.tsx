import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import styles from './LogoutDialog.module.css';

import Dialog from '@/core/components/Dialog/Dialog';

import { Button, Text, Title } from '@/components/atoms';

interface ConfirmButtonProps {
    onConfirm: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onConfirm }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button
            variant="gradient"
            data-testid="logout-dialog-confirm-button"
            loading={isLoading}
            onClick={() => {
                setIsLoading(true);
                onConfirm();
            }}
        >
            {isLoading ? '' : 'Sim'}
        </Button>
    );
};

export interface LogoutDialogRef {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutDialog: React.ForwardRefRenderFunction<LogoutDialogRef, object> = (props, ref) => {
    const [visible, setVisible] = useState(false);

    const onConfirm = useCallback(() => {}, []);
    const onReject = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({ setVisible }), []);

    return (
        <Dialog
            visible={visible}
            onHide={() => null}
            data-testid="logout-dialog"
            className={styles.logoutDialog}
            showHeader={false}
        >
            <div className={styles.logoutDialog__header}>
                <Title variant="h2" data-testid="logout-dialog-title">
                    Confirmação
                </Title>

                <Text variant="fwReg-fs20-lh30-gray500" data-testid="logout-dialog-description">
                    Tem certeza que deseja sair ?
                </Text>
            </div>

            <div className={styles.logoutDialog__footer}>
                <ConfirmButton onConfirm={onConfirm} />

                <Button
                    variant="fwMd-fs16-colGray700-bgWhite"
                    data-testid="logout-dialog-reject-button"
                    onClick={onReject}
                >
                    Não
                </Button>
            </div>
        </Dialog>
    );
};

export default forwardRef(LogoutDialog);
