import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/form-controls/InputField/input-field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
                    .required("Please enter title")
                    .min(5, 'Please enter minimum 5 character'),
    });

    const formTodo = useForm({
        defaultValues: {
            title: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log("Todo form: ", values);
    };
    return (
        <form onSubmit={formTodo.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={formTodo}></InputField>
        </form>
    );
}

export default TodoForm;
