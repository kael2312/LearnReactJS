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

ProductCard.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function ProductCard(props) {
    const { product } = props;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {product.originalPrice}
            </Typography>
        </Box>
    );
}

export default ProductCard;
