import React from 'react';
import PropTypes from 'prop-types';

ProductList.propTypes = {
    listProduct: PropTypes.array
};

function ProductList(props) {
    const {listProduct} = props
    console.log(listProduct);
    return (
        <div>
            
        </div>
    );
}

export default ProductList;