import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle, Close } from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import { logout } from "features/Auth/authSlice";
import Login from "features/Auth/components/Login/login";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "../../features/Auth/components/Register/register";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    closeButton: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [openRegister, setOpenRegister] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const loggedInUser = useSelector((state) => state.auth.current.id);
    const isLoggedInUser = !!loggedInUser;
    const {enqueueSnackbar} = useSnackbar();


    const [anchorEl, setAnchorEl] = useState(null);
    const openUserMenu = Boolean(anchorEl);

    const handleUserMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenRegister = () => {
        setOpenRegister(true);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const onLogout = async () => {
        try {
            const user = await dispatch(logout())
            localStorage.clear()
            setAnchorEl(null);
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton}></CodeIcon>
                    <Typography variant="h6" className={classes.title}>
                        SHOP
                    </Typography>
                    {!isLoggedInUser && (
                        <>
                            <Button color="inherit" onClick={handleOpenLogin}>
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleOpenRegister}
                            >
                                Register
                            </Button>
                        </>
                    )}
                    {isLoggedInUser && (
                        <>
                            <IconButton
                                color="inherit"
                                id="basic-button"
                                aria-controls={
                                    openUserMenu ? "basic-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={
                                    openUserMenu ? "true" : undefined
                                }
                                onClick={handleUserMenuClick}
                            >
                                <AccountCircle></AccountCircle>
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openUserMenu}
                                onClose={handleCloseUserMenu}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                getContentAnchorEl={null}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    My account
                                </MenuItem>
                                <MenuItem onClick={onLogout}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Dialog
                open={openRegister}
                onClose={handleCloseRegister}
                aria-labelledby="form-dialog-title"
                disableEscapeKeyDown={true}
            >
                <IconButton
                    className={classes.closeButton}
                    onClick={handleCloseRegister}
                >
                    <Close></Close>
                </IconButton>
                <DialogContent>
                    <Register closeDialog={handleCloseRegister}></Register>
                </DialogContent>
            </Dialog>
            <Dialog
                open={openLogin}
                onClose={handleCloseLogin}
                aria-labelledby="form-dialog-title"
                disableEscapeKeyDown={true}
            >
                <IconButton
                    className={classes.closeButton}
                    onClick={handleCloseLogin}
                >
                    <Close></Close>
                </IconButton>
                <DialogContent>
                    <Login closeDialog={handleCloseLogin}></Login>
                </DialogContent>
            </Dialog>
        </div>
    );
}
