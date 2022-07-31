import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail/product-thumbnail';
import { useRouteMatch } from 'react-router-dom';
import { useProductDetail } from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo/product-info';

ProductDetailPage.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {},

    left: {
        width: "400px",
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },

    right: {
        flex: "1 1 0",
        padding: theme.spacing(1.5),
    },
}));

function ProductDetailPage(props) {
    const classes = useStyles()
    const match = useRouteMatch();
    const productId = Number.parseInt(match.params.id);
    const productDetail = useProductDetail(productId)
    console.log(productDetail);
    return (
        <Box pt={4}>
            <Container spacing={1}>
                <Paper elevation={0} >
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={productDetail}></ProductThumbnail>
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={productDetail}></ProductInfo>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default ProductDetailPage;