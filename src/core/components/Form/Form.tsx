import React from 'react';

import { Form, Formik, FormikConfig, FormikValues } from 'formik';

interface BaseFormProps extends FormikConfig<FormikValues> {
    children: React.ReactNode;
}

const BaseForm: React.FC<BaseFormProps> = ({ children, ...props }) => (
    <Formik {...props}>
        <Form>{children}</Form>
    </Formik>
);

export default BaseForm;
