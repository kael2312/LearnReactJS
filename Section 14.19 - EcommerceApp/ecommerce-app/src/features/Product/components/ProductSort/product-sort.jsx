import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

ProductSort.propTypes = {
    sortValue: PropTypes.string,
    onSortValueChange: PropTypes.func
};

function ProductSort({sortValue, onSortValueChange}) {
    const [value, setValue] = React.useState(sortValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(onSortValueChange) onSortValueChange(newValue)
    };
    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab value="salePrice:ASC" label="Giá thấp tới cao" />
                <Tab value="salePrice:DESC" label="Giá cao xuống thấp" />
            </Tabs>
        </Paper>
    );
}

export default ProductSort;
