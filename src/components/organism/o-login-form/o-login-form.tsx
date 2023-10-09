import { useRef } from "react";
import { useRouter } from "next/navigation";

import { useFormik } from "formik";

// Atoms
import { A_Button, A_Text } from "@/components/atoms";

// Molecules
import { M_CheckboxWithLabel, M_InputWithLabel } from "@/components/molecules";
import { I_MToastComponent, I_MToastMessage, M_Toast } from "@/components/molecules/m-toast/m-toast";

// StyleSheet
import styles from "./o-login-form.module.css";

// FormValidationHelpers
import { initialValues, validationSchema } from "./login-form-validation";
import { I_HandleLoginProps } from "./login-form-validation/login-form-send";

export interface I_OLoginForm {
  handleLoginForm: ({}: I_HandleLoginProps) => void;
}

export const O_LoginForm = ({ handleLoginForm }: I_OLoginForm) => {
  const router = useRouter();

  const mToastRef = useRef<I_MToastComponent>(null);

  // Toast Configuration
  const mToastMessage: I_MToastMessage = {
    severity: "success",
    summary: "Sucesso!",
    detail: "Aguarde enquanto redirecionamos você.",
    life: 3000000,
  };

  // SubmitFormHandle
  const { handleSubmit, errors, touched, getFieldProps, values, isSubmitting } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleLoginForm({ values, setSubmitting, mToastRef, router });
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.o_form_login} data-testid="o-login-form">
        <M_InputWithLabel
          labelText="Email"
          type="email"
          placeholder="Informe o seu e-mail"
          {...getFieldProps("email")}
        />

        {errors.email && touched.email && <A_Text variant="error">{errors.email}</A_Text>}

        <M_InputWithLabel
          labelText="Senha"
          type="password"
          placeholder="Informe a sua senha"
          {...getFieldProps("password")}
        />

        {errors.password && touched.password && <A_Text variant="error">{errors.password}</A_Text>}

        <M_CheckboxWithLabel
          checked={values.manter_logado}
          labelText="Manter-me conectado por 30 dias."
          {...getFieldProps("manter_logado")}
        />

        <A_Button variant="gradient" type="submit" loading={isSubmitting}>
          {isSubmitting ? "" : "Login"}
        </A_Button>
      </form>

      {/* Login Toast */}
      <M_Toast ref={mToastRef} message={mToastMessage} />
    </>
  );
};
