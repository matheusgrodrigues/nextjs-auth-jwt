import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import * as PrToast from 'primereact/toast';

import styles from './Toast.module.css';

export interface ToastRef {
    showToast: (message: PrToast.ToastMessage | PrToast.ToastMessage[]) => void;
}

interface ToastProps extends PrToast.ToastProps {}

const Toast: React.ForwardRefRenderFunction<ToastRef, ToastProps> = (props, ref) => {
    const toastRef = useRef<PrToast.Toast>(null);

    useImperativeHandle(ref, () => ({ showToast: (message) => toastRef.current?.show({ ...message }) }), []);

    return (
        <PrToast.Toast
            data-testid="toast-testid"
            pt={{
                message: {
                    className: styles.toast__message,
                },
                content: {
                    className: styles.toast__content,
                },
                icon: {
                    className: styles.toast__icon,
                },
                text: {
                    className: styles.toast__text,
                },
            }}
            ref={toastRef}
            {...props}
        />
    );
};

export default forwardRef(Toast);
