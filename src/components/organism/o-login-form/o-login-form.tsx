import { Formik, ErrorMessage } from "formik";

// Atoms
import { A_Button } from "@/components/atoms";

// Molecules
import { M_CheckboxWithLabel, M_InputWithLabel } from "@/components/molecules";

// StyleSheet
import styles from "./o-login-form.module.css";

// Validation
import { initialValues, validationSchema } from "./FormValidationHelpers";
import { formValidation } from "./FormValidationHelpers/form-validation";

export interface I_OLoginForm {
  sendFormUrl: string;
}

export const O_LoginForm = ({ sendFormUrl }: I_OLoginForm) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setFieldError, setSubmitting }) => {
        formValidation({ values, setFieldError, setSubmitting, sendFormUrl });
      }}
    >
      {({ getFieldProps, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.o_form_login} data-testid="o-login-form">
          <M_InputWithLabel
            labelText="Email"
            type="email"
            placeholder="Informe o seu e-mail"
            {...getFieldProps("email")}
          />

          <ErrorMessage name="email" />

          <M_InputWithLabel
            labelText="Senha"
            type="password"
            placeholder="Informe a sua senha"
            {...getFieldProps("password")}
          />

          <ErrorMessage name="password" />

          <M_CheckboxWithLabel
            checked={false}
            labelText="Manter-me conectado por 30 dias."
            style={{ margin: "var(--spacing-4) 0" }}
          />

          <A_Button type="submit" disabled={isSubmitting}>
            Login
          </A_Button>
        </form>
      )}
    </Formik>
  );
};
