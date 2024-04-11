import React, { useState } from 'react';

import styles from './LogoutDialog.module.css';

import { Button, Text, Title } from '@/components/atoms';
import { Dialog } from '@/components/molecules';

interface LogoutDialogProps {
    visible: boolean;
    onConfirm: () => void;
    onReject: () => void;
}

export const LogoutDialog: React.FC<LogoutDialogProps> = ({ visible, onConfirm, onReject, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <Dialog
            visible={visible}
            onHide={() => null}
            data-testid="logout-dialog"
            className={styles.logoutDialog}
            showHeader={false}
            {...props}
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
