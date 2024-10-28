import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
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

const LoginForm: React.FC = () => {
    return (
        <div className="login-page">

            <header className="homepage-header">
                <img src={logo} alt="Xplora Logo" className="homepage-logo" />
                <nav className="homepage-nav">
                    <ul>
                        <li><Link to="/how-it-works">How it works</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/language">Language</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="logo-container">
                    <img src= {logo} alt="" />
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
                        onSubmit={(values: LoginFormValues) => {
                            console.log(values);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login-form">
                            <div className="form-field">
                                <Field type="email" name="email" placeholder="Email" className="input-field" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <Field type="password" name="password" placeholder="Password" className="input-field" />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            
                            <div className="forgot-password-container">
                                <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                            </div>
                            
                            <button type="submit" disabled={isSubmitting} className="submit-button">
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