import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productAPI from "api/product-api";
import Pagination from '@material-ui/lab/Pagination';
import { useState } from "react";

ProductListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},

    left: {
        width: "250px",
    },

    right: {
        flex: "1 1 auto",
    },
}));

function ProductListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
    });
    const [pagination, setPagination] = useState({
        count: 1,
        limit: 1
    })

    useEffect(() => {
        (async () => {
            const {data, pagination} = await productAPI.getListProduct(filters);
            setProductList(productList);
            setPagination(pagination)
            console.log({data, pagination});
        })();
    }, [filters]);
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left Column</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>Right Column</Paper>
                        <Pagination count={Math.ceil(pagination?.count / pagination?.limit)} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductListPage;
