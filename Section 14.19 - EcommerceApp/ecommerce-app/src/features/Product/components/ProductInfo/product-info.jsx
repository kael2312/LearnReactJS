import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { formatPrice } from "utils";

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {},

    description: {
        margin: theme.spacing(2, 0),
    },

    priceBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[100],
    },

    salePrice: {
        fontSize: theme.typography.h4.fontSize,
        marginRight: theme.spacing(3),
        fontWeight: "bold",
    },

    originalPrice: {
        marginRight: theme.spacing(2),
        textDecoration: "line-through",
    },
}));

function ProductInfo({ product }) {
    const classes = useStyles();
    return (
        <Box>
            <Typography component="h1" variant="h4">
                {product.name}
            </Typography>

            <Typography variant="body2" className={classes.description}>
                {product.shortDescription}
            </Typography>

            <Box className={classes.priceBox}>
                <Box className={classes.salePrice} component="span">
                    {formatPrice(product.salePrice)}
                </Box>

                {product.promotionPercent > 0 && (
                    <>
                        <Box className={classes.originalPrice} component="span">
                            {formatPrice(product.originalPrice)}
                        </Box>
                        <Box
                            className={classes.promotionPercent}
                            component="span"
                        >
                            {` -${product.promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;
