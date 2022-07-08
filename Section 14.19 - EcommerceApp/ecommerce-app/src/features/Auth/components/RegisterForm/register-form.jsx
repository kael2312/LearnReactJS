import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, LinearProgress, makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import InputField from "../../../../components/Form-Controls/InputField/input-field";
import PasswordField from "../../../../components/Form-Controls/PasswordField/password-field";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),
    },

    avatar: {
        margin: "0 auto",
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        textAlign: "center",
        margin: theme.spacing(2, 0, 3, 0),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0
    }
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;
    const schema = yup.object().shape({
        fullName: yup.string()
                    .required("Please enter Full name")
                    .test('should has at least two words', 'Please enter at least two words.', (value) => {
                        return value.split(' ').length >= 2;
                    }),
        email: yup.string()
                    .required('Please enter email')
                    .email('Please enter a valid email'),
        password: yup.string()
                    .required('Please enter password')
                    .min(6, 'Password must be at least six characters'),
        retypePassword: yup.string()
                    .required('Please retype your password')
                    .oneOf([yup.ref('password')], 'Password does not match')
    });

    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            retypePassword: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState
    return (
        <div className={classes.root}>
            { isSubmitting && <LinearProgress className={classes.progress}></LinearProgress>}
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField
                    name="fullName"
                    label="Full name"
                    form={form}
                ></InputField>
                <InputField name="email" label="Email" form={form}></InputField>
                <PasswordField
                    name="password"
                    label="Password"
                    form={form}
                ></PasswordField>
                <PasswordField
                    name="retypePassword"
                    label="Retype Password"
                    form={form}
                ></PasswordField>
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
