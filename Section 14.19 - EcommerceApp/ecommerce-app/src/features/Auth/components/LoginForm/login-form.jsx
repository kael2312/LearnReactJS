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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;
    const schema = yup.object().shape({
        identifier: yup.string()
                    .required('Please enter email')
                    .email('Please enter a valid email'),
        password: yup.string()
                    .required('Please enter password')
    });

    const form = useForm({
        defaultValues: {
            identifier: "",
            password: "",
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
                Login
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form}></InputField>
                <PasswordField
                    name="password"
                    label="Password"
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
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
