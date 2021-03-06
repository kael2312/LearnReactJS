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
import { useHistory, useLocation } from "react-router-dom";
import QueryString from "qs";
import queryString from "query-string"

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
    const history = useHistory();
    const location = useLocation();
    const queryParams = queryString.parse(location.search)
    const [freeShip, setFreeShip] = useState(false)
    const [listFilter, setListFilter] = useState([
        {
            id: 1,
            label: 'Miễn phí giao hàng',
            isToggle: true,
            isRemove: false,
            isActive: false
        }
    ]);
    const [pagination, setPagination] = useState({
        limit: 0,
        page: 0,
        total: 0
    })
    const [filter, setFilter] = useState(() => ({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit)|| 9,
        _sort: queryParams._sort || 'salePrice:ASC',
        isFreeShip: queryParams.isFreeShip || freeShip
    }))
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: QueryString.stringify(filter)
        })
    }, [history, filter])

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

    const onSortValueChange = (value) => {
        const newPage = {...filter, _sort: value};
        setFilter(newPage)
    }

    const onProductFiltersChange = (valueFilter, filterObject) => {
        const newPage = {...filter, ...valueFilter};
        const newListFilter = [...listFilter]
        const filterIndex = newListFilter.findIndex(x => x.id === filterObject.id)
        if (filterIndex < 0) {
            newListFilter.push(filterObject)
        }else{
            newListFilter[filterIndex] = filterObject
        }
        setListFilter(newListFilter)
        setFilter(newPage)
    }

    const onChangeFreeShip = (newFilter) => {
        const newPage = {...filter, isFreeShip: !freeShip};
        setFilter(newPage)
        const freeShipObj = listFilter.find(x => x.id === newFilter.id)
        const freeShipIndex = listFilter.findIndex(x => x.id === newFilter.id)
        const newFreeShipObj = {...freeShipObj, isActive: !newFilter.isActive}
        const newListFilter = [...listFilter]
        newListFilter[freeShipIndex] = newFreeShipObj
        setListFilter(newListFilter)
        setFreeShip(!freeShip)
    }

    const onDeleteCategory = (newFilter) => {
        const newPage = {...filter}
        const newListFilter = [...listFilter]
        delete newPage['category']
        newListFilter.splice(1, 1)
        setFilter(newPage)
        setListFilter(newListFilter)
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters onProductFiltersChange={onProductFiltersChange} ></ProductFilters>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort sortValue={filter._sort} onSortValueChange={onSortValueChange}></ProductSort>
                            <ProductFilterList onDeleteCategory = {onDeleteCategory} onChangeFreeShip = {onChangeFreeShip} listFilter={listFilter}></ProductFilterList>
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
