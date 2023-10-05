import { messages } from "@/utils";

import { I_InitialValues } from "./initial-values";

interface I_FormValidation {
  values: I_InitialValues;
  setFieldError: (field: string, message: string | undefined) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  sendFormUrl: string;
}

export const formValidation = ({ values, setFieldError, setSubmitting, sendFormUrl }: I_FormValidation) => {
  const { email, password } = values;

  const { INVALID_EMAIL_EMPTY, INVALID_PASSWORD_EMPTY } = messages.ERROR_MESSAGES;

  if (!email) {
    setFieldError("email", INVALID_EMAIL_EMPTY);
  }

  if (!password) {
    setFieldError("password", INVALID_PASSWORD_EMPTY);
  }

  if (email && password) {
    setSubmitting(false);
  }

  console.log(values, sendFormUrl);
};
