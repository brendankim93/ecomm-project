import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

import './sign-in-form.styles.scss';


const SignInForm = () => {
    const dispatch = useDispatch();

    const defaultFormFields = {
        email: '',
        password: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = formFields;

        try {
           dispatch(emailSignInStart(email, password));
           resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default: 
                    console.log(error);
            }
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const { email, password } = formFields;
    return (
        <div className='sign-in'>
            <h2>I already have an account.</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
               <FormInput name='email' type='email' value={email} onChange={handleChange} label='Email' required />
               <FormInput name='password' type='password' value={password} onChange={handleChange} label='Password' required />
                <div className='buttons'>
                  <Button type='submit'>
                      Sign In
                  </Button>
                  <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                      Sign In With Google
                  </Button>
                </div>
            </form>
        </div> 
    );
};

export default SignInForm;