import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/product-card";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

ProductList.propTypes = {
    listProduct: PropTypes.array,
};

function ProductList(props) {
    const { listProduct } = props;
    const history = useHistory()
    const onProductClick = (value) => {
        history.push(`/product/${value.id}`)
    }
    return (
        <Box>
            <Grid container spacing={1}>
                {listProduct.map((product) => {
                    return (
                        <Grid key={product.id} container item xs={4} spacing={3}>
                            <Box  padding={4}>
                                <ProductCard                                    
                                    product={product}
                                    onProductClick={onProductClick}
                                ></ProductCard>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProductList;
