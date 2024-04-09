import * as Yup from 'yup';

// Utils
import { messages } from '@/config';
import { I_HandleLoginProps } from './login-form-send';

export type T_HandleLoginForm = ({}: I_HandleLoginProps) => void;

export interface I_InitialValues {
    email: string;
    password: string;
    manter_logado: boolean;
}

export const initialValues: I_InitialValues = {
    email: 'admin@matheusgomesdev.com.br',
    password: '123456',
    manter_logado: false,
};

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(messages.login.ERROR_MESSAGES.INVALID_EMAIL_EMPTY)
        .email(messages.login.ERROR_MESSAGES.INVALID_EMAIL),
    password: Yup.string()
        .required(messages.login.ERROR_MESSAGES.INVALID_PASSWORD_EMPTY)
        .min(4, messages.login.ERROR_MESSAGES.INVALID_PASSWORD_MIN_LENGTH),
});
