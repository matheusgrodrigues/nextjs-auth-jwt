import React from 'react';

import { ErrorMessage, Field, FieldAttributes } from 'formik';

interface BaseFieldProps extends FieldAttributes<any> {}

export const BaseField: React.FC<BaseFieldProps> = ({ name, type, ...props }) => {
    return (
        <>
            <Field name={name} type={type} {...props} />
            <ErrorMessage name={name} />
        </>
    );
};

export default BaseField;
