import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

import './sign-up-form.styles.scss';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = formFields;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.error(error);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }
    const { displayName, email, password, confirmPassword } = formFields;
    
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'>
                <FormInput
                    onChange={handleChange}
                    label='Display Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    required
                />
                <Button type='submit' onClick={handleSubmit}>SIGN UP</Button>  
            </form>
        </div>
    );
}

export default SignUpForm;