import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

SearchBox.propTypes = {
    onSearchChange: PropTypes.func
};

SearchBox.defaultProps = {
    onSearchChange: null
}

function SearchBox({onSearchChange}) {

    const [searchValue, setSearchValue] = useState('')
    const typingTimeoutRef = useRef(null) // Tạo ra 1 object không thay đổi giữa những lần render

    useEffect(() => {
        if(onSearchChange){
            onSearchChange(searchValue)
        }
    }, [searchValue])

    const onTextChange = (e) => {
        const valueInput = e.target.value
        
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        };

        typingTimeoutRef.current = setTimeout(() => {
            setSearchValue(valueInput)
        }, 300);
    }
    return (
        <div>
            <input type="text" onChange={onTextChange} />
        </div>
    );
}

export default SearchBox;