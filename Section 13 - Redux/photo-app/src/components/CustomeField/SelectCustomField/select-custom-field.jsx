import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Select from "react-select";
import { FastField } from "formik";

SelectCustomField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectCustomField.defaultProps = {
    label: "",
    placeholder: "",
    disabled: false,
};

function SelectCustomField(props) {
    const { field, form, label, placeholder, disabled, options } = props;
    return (
        <div>
            <FormGroup>
                <Label for={field.name}>{label}</Label>
                <FastField
                    name={field.name}
                    as="select"
                    placeholder={placeholder}
                >
                    {
                        options.map(option => {
                            return (
                                <option value={option.value}>{option.label}</option>
                            )
                        })
                    }
                </FastField>
            </FormGroup>
        </div>
    );
}

export default SelectCustomField;
