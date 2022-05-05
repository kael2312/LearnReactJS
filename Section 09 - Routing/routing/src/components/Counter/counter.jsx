import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {

    const [counter, setCounter] = useState(1)
    
    return (
        <div>
            {counter}
            <button onClick={() => {setCounter(x => x + 1)}}>Increase</button>
            <button onClick={() => {setCounter(x => x - 1)}}>Decrease</button>
        </div>
    );
}

export default Counter;