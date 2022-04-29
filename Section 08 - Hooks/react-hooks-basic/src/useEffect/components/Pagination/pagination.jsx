import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss'

Pagination.propTypes = {
    pagination: PropTypes.object,
    onPageChange: PropTypes.func,
    onRecordChange: PropTypes.func
};

Pagination.defaultProps = {
    pagination: {},
    onPageChange: null,
    onRecordChange: null
}

function Pagination({pagination, onPageChange, onRecordChange}) {

    const lastPage = Math.ceil(pagination._totalRows / pagination._limit )
    const [limit, setLimit] = useState(0)
    const limitRef = useRef(0)

    const onNextPage = () => {
        console.log(lastPage);
        if (onPageChange) {
            onPageChange(limit, pagination._page + 1)
        }
    }

    const onPreviousPage = () => {
        if (onPageChange) {
            onPageChange(limit, pagination._page - 1)
        }
    }

    // useEffect(() => {
    //     if (onRecordChange) {
    //         onRecordChange(limit)
    //     }
    // }, [limit])

    const onSelectChange = (e) => {
        const newLimit = e.target.value
        setLimit(newLimit)
        limitRef.current = newLimit   
        if (onRecordChange) {
            onRecordChange(limitRef.current)
        }    
    }

    return (
        <div>
            <button onClick={onPreviousPage} disabled={pagination._page === 1}>Previous</button>
            <button onClick={onNextPage} disabled={pagination._page >= lastPage}>Next</button>
            <select value={limit} name="" id="" onChange={onSelectChange} >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>

            </select>
        </div>
    );
}

export default Pagination;