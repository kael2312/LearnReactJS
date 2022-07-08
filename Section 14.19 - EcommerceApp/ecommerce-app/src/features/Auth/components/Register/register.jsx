import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/register-form';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/authSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {
    closeDialog: PropTypes.func
};

function Register(props) {
    const {closeDialog} = props
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            values.username = values.email
            const user = await dispatch(register(values))
            const result = unwrapResult(user)
            if (closeDialog) {
                closeDialog();
            }
            enqueueSnackbar('Register successfully', {variant: 'success'})
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}></RegisterForm>
        </div>
    );
}

export default Register;