import * as Yup from "yup";

// Utils
import { messages } from "@/utils";
import { I_HandleLoginProps } from "./login-form-send";

export type T_HandleLoginForm = ({}: I_HandleLoginProps) => void;

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

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(messages.ERROR_MESSAGES.INVALID_EMAIL_EMPTY)
    .email(messages.ERROR_MESSAGES.INVALID_EMAIL),
  password: Yup.string()
    .required(messages.ERROR_MESSAGES.INVALID_PASSWORD_EMPTY)
    .min(4, messages.ERROR_MESSAGES.INVALID_PASSWORD),
});
