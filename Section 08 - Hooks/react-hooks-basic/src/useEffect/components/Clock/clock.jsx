import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function formatDate(date) {
    if(!date) return
    const hour = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const second = `0${date.getSeconds()}`.slice(-2)

    return `${hour} : ${minutes} : ${second}`
}

function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const newTimeString = formatDate(new Date())
            setTimeString(newTimeString)
        }, 1000);

        return () => {
            clearInterval(timeInterval)
        }
        
    }, [])

    return (
        <div>
            <h2>{timeString}</h2>
        </div>
    );
}

export default Clock;