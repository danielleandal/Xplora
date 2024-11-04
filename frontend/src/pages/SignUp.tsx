import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Ensure CSS is appropriately aligned
import logo from '../images/logo.png'; // Adjust path if needed

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
        <div className="signup-page">
            <header className="homepage-header">
                <Link to="/">
                    <img src={logo} alt="Xplora Logo" className="homepage-logo" />
                </Link>
                <nav className="homepage-nav">
                    <ul>
                        <li><Link to="/how-it-works">How it works</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                  
                    </ul>
                </nav>
            </header>
            <div className="another-container">
                <div className="logo-container">
                <img src={logo} alt="Xplora Logo" className='big-logo' />
                    <h1>Discover the World Your Way </h1>
                </div>
                <div className="signup-container">
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
                            <Form className="signup-form">
                                
                                {/*  email field */}
                                <div className="signup-form-field">
                                    <Field type="email" name="email" placeholder="Email" className="signup-input-field" />
                                </div>
                                <div className="signup-error">
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>

                                {/* firstname field */}
                                <div className="signup-form-field">
                                    <Field type="text" name="firstName" placeholder="First Name" className="signup-input-field" />
                                </div>
                                <div className="signup-error">
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                </div>

                                {/* lastname field */}
                                <div className="signup-form-field">
                                    <Field type="text" name="lastName" placeholder="Last Name" className="signup-input-field" />
                                </div>
                                <div className="signup-error">
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                </div>

                                {/* password field */}
                                <div className="signup-form-field">
                                    <Field type="password" name="password" placeholder="Password" className="signup-input-field" />
                                </div>
                                <div className="signup-error">
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                </div>

                                {/* confirm password field */}
                                <div className="signup-form-field">
                                    <Field type="password" name="confirmPassword" placeholder="Verify Password" className="signup-input-field" />
                                </div>
                                <div className="signup-error">
                                    <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="signup-submit-button">
                                    Get Exploring!
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="signup-link">Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </div> 
        </div>
    );
};

export default SignupForm;