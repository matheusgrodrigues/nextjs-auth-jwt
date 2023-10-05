import * as Yup from "yup";

// Utils
import { messages } from "@/utils";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(messages.ERROR_MESSAGES.INVALID_EMAIL_EMPTY)
    .email(messages.ERROR_MESSAGES.INVALID_EMAIL),
  password: Yup.string()
    .required(messages.ERROR_MESSAGES.INVALID_PASSWORD_EMPTY)
    .min(4, messages.ERROR_MESSAGES.INVALID_PASSWORD),
});
