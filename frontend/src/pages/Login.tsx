import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png'; // Replace with actual path

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
});

const app_name = 'xplora.fun'; // Replace with your actual production server domain, e.g., 'example.com'

function buildPath(route: string): string {
    if (process.env.NODE_ENV !== 'development') {
        return `https://${app_name}:5000/${route}`;
    } else {
        return `https://localhost:5000/${route}`;
    }
}


const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="login-page">
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

            <div className="l-container">
                <div className="login-logo-container">
                    <img src={logo} alt="Xplora Logo" />
                    <h1>Discover The World Your Way</h1>
                </div>
                <div className="login-container">
                    <h1 className="login-title">Welcome Back!</h1>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={async (values: LoginFormValues, { setSubmitting, setErrors }) => {
                            console.log("Form submitted"); 
                            try {
                                const response = await fetch(buildPath('api/login'), {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values),
                                });
                        
                                const data = await response.json();
                        
                                if (response.ok) {
                                    console.log('Login successful:', data);
                                    navigate('/dashboard');
                                    // Handle successful login here
                                } else {
                                    setErrors({ email: data.error });
                                }
                            } catch (error) {
                                console.error('Error:', error);
                                setErrors({ email: 'An error occurred. Please try again.' });
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login-form">
                                <div className="login-form-field">
                                    <Field type="email" name="email" placeholder="Email" className="login-input-field" />
                                </div>
                                <div className="login-error-container">
                                    <ErrorMessage name="email" component="div" className="login-error-message" />
                                </div>

                                <div className="login-form-field">
                                    <Field type="password" name="password" placeholder="Password" className="login-input-field" />
                                </div>
                                <div className="login-error-container">
                                    <ErrorMessage name="password" component="div" className="login-error-message" />
                                </div>

                                <div className="login-forgot-password-container">
                                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                                </div>

                                <button type="submit" disabled={isSubmitting} className="login-submit-button">
                                    Get Exploring!
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="signup-link">Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;