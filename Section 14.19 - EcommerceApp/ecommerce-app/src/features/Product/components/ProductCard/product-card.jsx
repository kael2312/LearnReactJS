import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/common.constants";
import { formatPrice } from "utils";

ProductCard.propTypes = {
    product: PropTypes.object,
    onProductClick: PropTypes.func
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function ProductCard({ product, onProductClick }) {
    const classes = useStyles();
    const thumbnail = product.thumbnail?.url ? STATIC_HOST + `${product.thumbnail.url}` : THUMBNAIL_PLACEHOLDER
    const handleProductClick = (product) => {
        if(onProductClick) onProductClick(product)
    }

    return (
        <Box className={classes.root} onClick={() => handleProductClick(product)}>
            <Box padding={1}>
                <img src={thumbnail} alt={product.name} width="100%" />
            </Box>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default ProductCard;
