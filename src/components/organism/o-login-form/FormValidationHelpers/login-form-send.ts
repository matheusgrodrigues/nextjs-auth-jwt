import { I_InitialValues } from "./login-form-validation";

export interface I_HandleLoginProps {
  values: I_InitialValues;
  setSubmitting: (isSubmitting: boolean) => void;
}

export const handleLoginForm = ({ values, setSubmitting }: I_HandleLoginProps) => {
  const { email, password, manter_logado } = values;

  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
    alert(`Simulando envio bem sucedido: email: ${email} -  senha: ${password} - manter_logado: ${manter_logado}`);
  }, 3000);
};
