import casual from "casual-browserify";
import InputCustomField from "components/CustomeField/InputCustomField/input-custom-field";
import RandomPhotoField from "components/CustomeField/RandomPhotoField/random-photo-field";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/image";
import { Formik, Form, FastField } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
    onSubmit: null,
    initialValues: {
        id: "",
        title: "",
        categoryId: "",
        photo: "",
    },
};

function PhotoForm(props) {
    const { initialValues, isAddMode } = props;
    console.log(initialValues);
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                if (isAddMode) {
                    const id = casual.uuid;
                    const newPhoto = { ...values, id: id };
                    props.onSubmit(newPhoto);
                } else {
                    props.onSubmit(values);
                }
            }}
        >
            <Form>
                <FastField
                    name="title"
                    placeholder="Eg: Wow nature"
                    label="Title"
                    component={InputCustomField}
                    type="text"
                ></FastField>

                <FastField
                    name="categoryId"
                    placeholder="What's your photo category"
                    label="Category"
                    component={InputCustomField}
                    type="select"
                    options={PHOTO_CATEGORY_OPTIONS}
                ></FastField>

                <FastField
                    name="photo"
                    component={RandomPhotoField}
                    label="Photo"
                />

                <FormGroup>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </Formik>
    );
}

export default PhotoForm;
