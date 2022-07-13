import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productAPI from "api/product-api";
import Pagination from '@material-ui/lab/Pagination';
import { useState } from "react";
import ProductList from "../components/ProductList/product-list";

ProductListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},

    left: {
        width: "250px",
    },

    right: {
        flex: "1 1 0",
    },
}));

function ProductListPage(props) {
    const classes = useStyles();
    const [pagination, setPagination] = useState({
        limit: 0,
        page: 0,
        total: 0
    })
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10
    })
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        (async () => {
            const {data, pagination} = await productAPI.getListProduct(filter)
            setPagination(pagination)
            setListProduct(data)
        })()
    }, [filter])

    const onPaginationChange = (event, page) => {
        const newPage = {...filter, _page: page}
        setFilter(newPage)
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left Column</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductList listProduct={listProduct}></ProductList>
                            <Pagination onChange={onPaginationChange} count={Math.ceil(pagination.total / pagination.limit)} color="primary" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductListPage;
