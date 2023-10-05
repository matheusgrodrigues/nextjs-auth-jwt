import { I_InitialValues } from "./initial-values";

interface I_SendFormProps extends T_SendFormProps {
  values: I_InitialValues;
}

export const sendLoginForm = ({ values, setSubmitting, sendFormUrl }: I_SendFormProps) => {
  const { email, password, manter_logado } = values;

  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
    alert(
      `Simulando envio bem sucedido: email: ${email} -  senha: ${password} - manter_logado: ${manter_logado} - endpoint: ${sendFormUrl}`
    );
  }, 3000);
};
