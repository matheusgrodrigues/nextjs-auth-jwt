import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './LogoutDialog.module.scss';

import Dialog from '@/core/components/Dialog/Dialog';

import { Button, ButtonRef, Text, Title } from '@/components/atoms';

import tokenService from '@/core/services/tokenService';

import useTranslation from '@/core/hooks/useTranslation';

interface ConfirmButtonProps {
    onConfirm: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onConfirm }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { t } = useTranslation();

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
            {isLoading ? '' : t('specific.welcome.modal.logoutDialog.btnConfirm')}
        </Button>
    );
};

export interface LogoutDialogRef {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutDialog: React.ForwardRefRenderFunction<LogoutDialogRef, object> = (props, ref) => {
    const [visible, setVisible] = useState(false);

    const router = useRouter();

    const btnLogoutRef = useRef<ButtonRef>(null);

    const { t } = useTranslation();

    const onConfirm = useCallback(() => {
        btnLogoutRef.current?.setLoading(true);
        tokenService.delete();
        router.push('/');
    }, []);

    const onReject = useCallback(() => setVisible(false), []);

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
                    {t('specific.welcome.modal.logoutDialog.title')}
                </Title>

                <Text variant="fwReg-fs20-lh30-gray500" data-testid="logout-dialog-description">
                    {t('specific.welcome.modal.logoutDialog.description')}
                </Text>
            </div>

            <div className={styles.logoutDialog__footer}>
                <ConfirmButton onConfirm={onConfirm} />

                <Button
                    variant="fwMd-fs16-colGray700-bgWhite"
                    data-testid="logout-dialog-reject-button"
                    onClick={onReject}
                >
                    {t('specific.welcome.modal.logoutDialog.btnReject')}
                </Button>
            </div>
        </Dialog>
    );
};

export default forwardRef(LogoutDialog);
