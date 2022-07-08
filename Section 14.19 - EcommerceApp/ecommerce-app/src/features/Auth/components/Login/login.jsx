import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/register-form';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { login, register } from 'features/Auth/authSlice';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm/login-form';

Login.propTypes = {
    closeDialog: PropTypes.func
};

function Login(props) {
    const {closeDialog} = props
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            const user = await dispatch(login(values))
            const result = unwrapResult(user)
            if (closeDialog) {
                closeDialog();
            }
            enqueueSnackbar('Login successfully', {variant: 'success'})
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}></LoginForm>
        </div>
    );
}

export default Login;