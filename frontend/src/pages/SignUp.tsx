import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css';

interface SignupFormValues {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[\^$*.[\]{}()?-“!@#%&/,><’:;|_~`]/, 'Password must contain a special character')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required')
});

const SignupForm: React.FC = () => {
    return (
        <div>
            <h1>XPLORA - Discover the World, Your Way</h1>
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values: SignupFormValues) => {
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />

                        <Field type="text" name="firstName" placeholder="First Name" />
                        <ErrorMessage name="firstName" component="div" />

                        <Field type="text" name="lastName" placeholder="Last Name" />
                        <ErrorMessage name="lastName" component="div" />

                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" />

                        <Field type="password" name="confirmPassword" placeholder="Verify Password" />
                        <ErrorMessage name="confirmPassword" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Get Exploring!
                        </button>
                    </Form>
                )}
            </Formik>
            <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
    );
};

export default SignupForm;