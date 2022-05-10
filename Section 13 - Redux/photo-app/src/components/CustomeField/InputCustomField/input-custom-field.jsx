import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

InputCustomField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

InputCustomField.defaultProps = {
    type: "",
    label: "",
    placeholder: "",
    disabled: false,
    options: null,
};

function InputCustomField(props) {
    const { field, form, type, label, placeholder, disabled, options } = props;

    return (
        <FormGroup>
            <Label for={field.name}>{label}</Label>
            <Input
                {...field}
                id={field.name}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
            >
                <option hidden  value=''>{placeholder}</option>
                {
                    options &&
                    options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        );
                    })
                }
            </Input>
        </FormGroup>
    );
}

export default InputCustomField;
