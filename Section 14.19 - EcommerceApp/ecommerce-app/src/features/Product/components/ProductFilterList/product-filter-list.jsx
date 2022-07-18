import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { useEffect } from "react";

ProductFilterList.propTypes = {
    listFilter: PropTypes.array,
    onChangeFreeShip: PropTypes.func,
    arr: PropTypes.array
};



const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
        },
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
    },
}));

function ProductFilterList(props) {
    const { listFilter, onChangeFreeShip, arr } = props
    const classes = useStyles();
    const [toggleChip, setToggleChip] = useState(false);
    const handleDelete = () => {
        console.info("You clicked the delete icon.");
    };

    const handleClick = () => {
        setToggleChip(!toggleChip);
        if (onChangeFreeShip) onChangeFreeShip();
    };

    useEffect(() => {
        console.log(arr);

    }, [props, listFilter, arr])
    return (
        <div className={classes.root}>
            {/* {listFilter.map((filter) => {
                return (
                    <Chip
                        key={filter.id}
                        size="small"
                        label={filter.label}
                        onClick={filter.isToggle ? handleClick : ''}
                        color={toggleChip ? "primary" : "default"}
                    />
                );
            })} */}

            {/* <Chip
                size="small"
                label="Primary Clickable"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                size="small"
                label="Primary Clickable"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                size="small"
                label="Deletable Primary"
                onDelete={handleDelete}
                color="primary"
            /> */}
        </div>
    );
}

export default ProductFilterList;
