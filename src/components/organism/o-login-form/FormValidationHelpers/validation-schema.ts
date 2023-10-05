import * as Yup from "yup";

// Utils
import { messages } from "@/utils";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email(messages.ERROR_MESSAGES.INVALID_EMAIL),
  password: Yup.string().min(7, messages.ERROR_MESSAGES.INVALID_PASSWORD),
});
