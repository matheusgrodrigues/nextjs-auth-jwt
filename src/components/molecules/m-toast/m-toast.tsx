import { Toast, ToastMessage, ToastProps } from "primereact/toast";
import { createRef, forwardRef, useImperativeHandle } from "react";

// StyleSheet
import styles from "./m-toast.module.css";

export interface I_MToastMessage extends ToastMessage {}

interface I_MToast extends ToastProps {
  "data-testid"?: string;
}

interface I_MToastHandle {
  showToast: (message: I_MToastMessage | I_MToastMessage[]) => void;
}

export interface I_MToastComponent extends Toast {
  showToast: (message: I_MToastMessage | I_MToastMessage[]) => void;
}

export const M_Toast = forwardRef<I_MToastHandle, I_MToast>(function M_Toast(props, ref) {
  const mToastRef = createRef<I_MToastComponent>();

  useImperativeHandle(
    ref,
    () => {
      return {
        showToast(message: I_MToastMessage | I_MToastMessage[]) {
          if (mToastRef && mToastRef.current) {
            mToastRef.current.show(message);
          }
        },
      };
    },
    [mToastRef]
  );

  return (
    <Toast
      data-testid="m-toast"
      pt={{
        message: {
          className: styles.m_toast__message,
        },
        content: {
          className: styles.m_toast__content,
        },
        icon: {
          className: styles.m_toast__icon,
        },
        text: {
          className: styles.m_toast__text,
        },
      }}
      ref={mToastRef}
      {...props}
    />
  );
});
