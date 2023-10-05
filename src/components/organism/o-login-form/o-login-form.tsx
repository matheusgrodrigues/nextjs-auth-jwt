import { useFormik } from "formik";

// Atoms
import { A_Button, A_Text } from "@/components/atoms";

// Molecules
import { M_CheckboxWithLabel, M_InputWithLabel } from "@/components/molecules";

// StyleSheet
import styles from "./o-login-form.module.css";

// FormValidationHelpers
import { initialValues, validationSchema } from "./FormValidationHelpers";
import { sendLoginForm } from "./FormValidationHelpers";

export interface I_OLoginForm {
  sendFormUrl: string;
}

export const O_LoginForm = ({ sendFormUrl }: I_OLoginForm) => {
  const { handleSubmit, getFieldProps, isSubmitting, touched, errors, values, isValidating } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!isValidating) {
        sendLoginForm({ values, setSubmitting, sendFormUrl });
      }
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.o_form_login} data-testid="o-login-form">
      <M_InputWithLabel labelText="Email" type="email" placeholder="Informe o seu e-mail" {...getFieldProps("email")} />

      {errors.email && touched.email && <A_Text type="error">{errors.email}</A_Text>}

      <M_InputWithLabel
        labelText="Senha"
        type="password"
        placeholder="Informe a sua senha"
        {...getFieldProps("password")}
      />

      {errors.password && touched.password && <A_Text type="error">{errors.password}</A_Text>}

      <M_CheckboxWithLabel
        checked={values.manter_logado}
        labelText="Manter-me conectado por 30 dias."
        {...getFieldProps("manter_logado")}
      />

      <A_Button type="submit" disabled={isSubmitting}>
        Login
      </A_Button>
    </form>
  );
};
