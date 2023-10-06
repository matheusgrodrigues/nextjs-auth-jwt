import { I_InitialValues } from "./login-form-validation";

export interface I_SendFormProps extends T_SendFormProps {
  values: I_InitialValues;
}

export const sendLoginForm = ({ values, setSubmitting }: I_SendFormProps) => {
  const { email, password, manter_logado } = values;


  return values;
  /*
  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
    alert(`Simulando envio bem sucedido: email: ${email} -  senha: ${password} - manter_logado: ${manter_logado}`);
  }, 3000);*/

};
