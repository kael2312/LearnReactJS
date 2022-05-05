import React, { useState } from 'react';
import PropTypes from 'prop-types';

Color.propTypes = {
    
};

function Color(props) {

    const [color, setColor] = useState('white')
    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('white')}>Change to black</button>
        </div>
    );
}

export default Color;