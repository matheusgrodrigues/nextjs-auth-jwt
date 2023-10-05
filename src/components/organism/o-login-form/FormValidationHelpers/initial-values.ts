export interface I_InitialValues {
  email: string;
  password: string;
  manter_logado: boolean;
}

export const initialValues: I_InitialValues = {
  email: "",
  password: "",
  manter_logado: false,
};
