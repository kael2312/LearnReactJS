import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useForm } from "react-hook-form";


InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {    
    const { form, name, label, disabled } = props;
    const {errors, formState} = form; 
    const hasError = errors[name] && formState.touched[name]

    return (
        <div>
            <Controller error={hasError} helperText={errors[name]?.message} name={name} control={form.control} label={label} disabled={disabled} as={TextField}>
            </Controller>
        </div>
    );
}

export default InputField;
