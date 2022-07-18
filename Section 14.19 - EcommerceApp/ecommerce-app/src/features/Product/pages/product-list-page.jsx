import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productAPI from "api/product-api";
import Pagination from '@material-ui/lab/Pagination';
import { useState } from "react";
import ProductList from "../components/ProductList/product-list";
import ProductSort from "../components/ProductSort/product-sort";
import ProductFilters from "../components/ProductFilters/product-filters";
import ProductFilterList from "../components/ProductFilterList/product-filter-list";

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
    const [freeShip, setFreeShip] = useState(false)
    const [listFilter, setListFilter] = useState([]);
    const [arr, setArr] = useState([1, 2 ,3 ,4])
    const [pagination, setPagination] = useState({
        limit: 0,
        page: 0,
        total: 0
    })
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC',
        isFreeShip: freeShip
    })
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        (async () => {
            const {data, pagination} = await productAPI.getListProduct(filter)
            setPagination(pagination)
            setListProduct(data)
        })()
    }, [filter])

    useEffect(() => {
        const newElement ={
                id: 1,
                label: 'Miễn phí giao hàng',
                isToggle: true,
                isRemove: false
            }
        const newArr = [...listFilter]
        newArr.push(newElement)
        setListFilter(newArr)
    }, [listFilter])

    const onPaginationChange = (event, page) => {
        const newPage = {...filter, _page: page}
        setFilter(newPage)
    }

    const onSortValueChange = (value) => {
        const newPage = {...filter, _sort: value};
        setFilter(newPage)
    }

    const onProductFiltersChange = (value) => {
        const newPage = {...filter, ...value};
        setFilter(newPage)
    }

    const onChangeFreeShip = () => {
        const newPage = {...filter, isFreeShip: !freeShip};
        setFilter(newPage)
        setFreeShip(!freeShip)
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                        {listFilter.length > 0 && (
                            <ProductFilters onProductFiltersChange={onProductFiltersChange} listFilter={listFilter} arr={arr}></ProductFilters>
                        )}
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort sortValue={filter._sort} onSortValueChange={onSortValueChange}></ProductSort>
                            <ProductFilterList onChangeFreeShip = {onChangeFreeShip}></ProductFilterList>
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
