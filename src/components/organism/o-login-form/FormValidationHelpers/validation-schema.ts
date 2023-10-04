import * as Yup from "yup";

// Utils
import { messages } from "@/utils";

export const validationSchema = Yup.object({
  email: Yup.string().email(messages.ERROR_MESSAGES.INVALID_EMAIL),
  password: Yup.string().min(15, messages.ERROR_MESSAGES.INVALID_PASSWORD),
});
