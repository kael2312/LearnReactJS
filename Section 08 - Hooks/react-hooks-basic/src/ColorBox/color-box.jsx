import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function randomColor(){
    const listColor = ['blue', 'green', 'yellow', 'deeppink', 'red']
    const randomIndex = Math.floor(Math.random()*5)
    return listColor[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('lastColor')
    })

    const changeColor = () => {
        const newColor = randomColor();
        localStorage.setItem('lastColor', newColor)
        setColor(newColor);
    }
    return (
        <div style={{backgroundColor: color}} onClick={changeColor}>
            <h1 style={{color: 'white'}}>COLOR BOX</h1>
        </div>
    );
}

export default ColorBox;