import React from "react";
import PropTypes from "prop-types";
import { Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ProductListPage from "./pages/product-list-page";
import { Box } from "@material-ui/core";
import ProductDetailPage from "./pages/product-detail-page";

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();
    console.log(match.url);
    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} exact>
                        <ProductListPage></ProductListPage>
                    </Route>
                </Switch>
            </Box>
        </div>
    );
}

export default Product;
