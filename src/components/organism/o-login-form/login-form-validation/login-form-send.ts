import { RefObject } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Interfaces
import { I_InitialValues } from "./login-form-validation";
import { I_MToastComponent } from "@/components/molecules/m-toast/m-toast";

// Services
import { messages } from "@/utils";
import { authUseCases } from "@/core/useCases/auth/authUseCase";

export interface I_HandleLoginProps {
  values: I_InitialValues;
  setSubmitting: (isSubmitting: boolean) => void;
  mToastRef: RefObject<I_MToastComponent>;
  router: AppRouterInstance;
}

export const handleLoginForm = async ({ values, setSubmitting, mToastRef, router }: I_HandleLoginProps) => {
  const { email, password, manter_logado } = values;

  setSubmitting(true);

  // Tempo de duração do Toast na tela.
  const life = 3000;

  try {
    const { jwt, user } = await authUseCases.login({
      identifier: email,
      password: password,
    });

    setSubmitting(false);

    if (mToastRef && mToastRef.current) {
      mToastRef.current.showToast({
        severity: "success",
        summary: messages.login.TOAST.SUCCESS_TITLE,
        detail: messages.login.TOAST.REDIRECT_MESSAGE,
        life,
      });
    }

    setTimeout(() => router.push("/welcome"), life);
  } catch {
    setSubmitting(false);

    if (mToastRef && mToastRef.current) {
      mToastRef.current.showToast({
        severity: "error",
        summary: messages.login.TOAST.ERROR_TITLE,
        detail: messages.login.ERROR_MESSAGES.INVALID_EMAIL_PASSWORD,
        life,
      });
    }
  }
};
