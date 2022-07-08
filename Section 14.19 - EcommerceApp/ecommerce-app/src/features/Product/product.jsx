import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ProductListPage from "./pages/product-list-page";
import { Box } from "@material-ui/core";

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} component={ProductListPage}></Route>
                </Switch>
            </Box>
        </div>
    );
}

export default Product;






