import { I_MToastComponent, I_MToastMessage } from "@/components/molecules/m-toast/m-toast";
import { I_InitialValues } from "./login-form-validation";
import { RefObject } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface I_HandleLoginProps {
  values: I_InitialValues;
  setSubmitting: (isSubmitting: boolean) => void;
  mToastRef: RefObject<I_MToastComponent>;
  router: AppRouterInstance;
}

export const handleLoginForm = ({ values, setSubmitting, mToastRef, router }: I_HandleLoginProps) => {
  const { email, password, manter_logado } = values;

  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
  }, 2000);

  setTimeout(() => {
    if (mToastRef && mToastRef.current) {
      mToastRef.current.showToast();
    }
  }, 2000);

  setTimeout(() => {
    router.push("/welcome");
  }, 4000);
};
