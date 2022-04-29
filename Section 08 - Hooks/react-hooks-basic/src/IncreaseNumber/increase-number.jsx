import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

IncreaseNumber.propTypes = {
    
};

function IncreaseNumber(props) {
    const [number, setNumber] = useState(0)
    const [option, setOption] = useState(0)
    const prevOption = useRef(option)

    const increaseNumber = () => {
        setNumber(number => number += 1)
    }

    const changeOption = (e) => {
        const newOption = e.target.value
        
        prevOption.current = newOption
        setOption(prevOption.current)
        console.log('option: ', option);
        console.log('prevOption: ', prevOption.current);
    }
    return (
        <div>
            <div>
            {number}
            </div>
            <div>
                Option: {option}
            </div>
            <div>
                prevOption: {prevOption.current}
            </div>

            <button onClick={increaseNumber}>Increase</button>
            <select name="" id="" onChange={changeOption}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
}

export default IncreaseNumber;