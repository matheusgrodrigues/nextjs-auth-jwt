import React, { createRef, useImperativeHandle } from 'react';

import * as PrToast from 'primereact/toast';

import styles from './m-toast.module.css';

interface ToastMessageProps extends PrToast.ToastMessage {}

interface ToastProps extends PrToast.ToastProps {
    'data-testid'?: string;
}

interface ToastHandleProps {
    showToast: (message: ToastMessageProps | ToastMessageProps[]) => void;
}

interface ToastComponentProps extends PrToast.ToastProps {
    showToast: (message: ToastMessageProps | ToastMessageProps[]) => void;
}

const Toast = React.forwardRef<ToastHandleProps, ToastProps>(function Toast(props, ref) {
    const mToastRef = createRef<ToastComponentProps>();

    useImperativeHandle(
        ref,
        () => {
            return {
                showToast(message: ToastMessageProps | ToastMessageProps[]) {
                    if (mToastRef && mToastRef.current) {
                        mToastRef.current.showToast(message);
                    }
                },
            };
        },
        [mToastRef]
    );

    return (
        <Toast
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
            ref={mToastRef}
            {...props}
        />
    );
});

export default Toast;
