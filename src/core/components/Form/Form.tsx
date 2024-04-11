import React from 'react';

import { Field, Form, Formik, FormikConfig, FormikValues, useFormik, useFormikContext } from 'formik';

const BaseForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: (values) => {
            const errors = {};

            if (!values.firstName) {
                errors.firstName = 'Required';
            }

            return errors;
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            {formik.errors.firstName && formik.touched.firstName && <div id="feedback">{formik.errors.firstName}</div>}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BaseForm;
