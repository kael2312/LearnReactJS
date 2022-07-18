import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CategoryAPI from "api/category-api";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

ProductFilters.propTypes = {
    onProductFiltersChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        "& > li": {
            marginTop: theme.spacing(1),
            transition: "all .25s",

            "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
            },
        },
    },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function ProductFilters({ onProductFiltersChange }) {
    const [categoryList, setCategoryList] = useState([]);
    const [value, setValue] = React.useState([20, 37]);

    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const response = await CategoryAPI.getAll();
            setCategoryList(response);
        })();
    }, []);

    const onCategoryChange = (category) => {
        const newFilter = { category: category.id };
        setFilterValue("category", newFilter);
    };

    const onPriceRangeChange = (event, newValue) => {
        setValue(newValue)
        const newFilter = {
            "_where[0][salePrice_gte]": newValue[0] * 1000,
            "_where[1][salePrice_lte]": newValue[1] * 500000,
        };
        setFilterValue("price", newFilter);
    };

    const valueLabelFormat = (x) => {
        return x * 500000;
    };

    const setFilterValue = (filterType, value) => {
        switch (filterType) {
            case "category":
                if (onProductFiltersChange) onProductFiltersChange(value);
                break;
            case "price":
                if (onProductFiltersChange) onProductFiltersChange(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Box className={classes.root}>
                <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
                <ul className={classes.menu}>
                    {categoryList.map((category) => {
                        return (
                            <li
                                onClick={() => onCategoryChange(category)}
                                key={category.id}
                            >
                                {category.name}
                            </li>
                        );
                    })}
                </ul>
            </Box>
            <Divider></Divider>
            <Box className={classes.root}>
                <Typography variant="subtitle2">Khoảng giá</Typography>
                <Slider
                    value={value}
                    onChangeCommitted={onPriceRangeChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    valueLabelFormat={valueLabelFormat}
                    ValueLabelComponent={ValueLabelComponent}
                />
            </Box>
        </>
    );
}

export default ProductFilters;
