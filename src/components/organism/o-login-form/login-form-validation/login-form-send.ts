import { RefObject } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Interfaces
import { I_InitialValues } from "./login-form-validation";
import { I_MToastComponent } from "@/components/molecules/m-toast/m-toast";

// Services
import { authService } from "@/services/auth/login";

export interface I_HandleLoginProps {
  values: I_InitialValues;
  setSubmitting: (isSubmitting: boolean) => void;
  mToastRef: RefObject<I_MToastComponent>;
  router: AppRouterInstance;
}

export const handleLoginForm = async ({ values, setSubmitting, mToastRef, router }: I_HandleLoginProps) => {
  const { email, password, manter_logado } = values;

  setSubmitting(true);

  try {
    const { data } = await authService.login({
      identifier: email,
      password: password,
    });

    console.log(data);

    if (mToastRef && mToastRef.current) {
      mToastRef.current.showToast();
    }

    setTimeout(() => router.push("/welcome"), 2000);
  } catch {
    setSubmitting(false);

    alert("Erro ao logar");
  } finally {
    setSubmitting(false);
  }
};
