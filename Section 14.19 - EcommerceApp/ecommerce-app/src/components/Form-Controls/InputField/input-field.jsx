import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name]
    return (
        <div>
            <Controller 
                name={name}
                control={form.control}
                as={TextField}

                variant='outlined'
                fullWidth
                label={label}
                disabled={disabled}
                margin='normal'

                error={!!hasError}
                helperText={errors[name]?.message}
            ></Controller>
        </div>
    );
}

export default InputField;