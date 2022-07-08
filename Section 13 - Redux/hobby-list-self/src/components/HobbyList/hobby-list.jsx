import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addHobby, setActiveHobby } from '../../redux/actions/hobby.action';
import './hobby-list.css'


HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    onHobbyClick: PropTypes.func,
    activeID: PropTypes.string
};

HobbyList.defaultProps = {
    hobbyList: [],
    onHobbyClick: null,
    activeID: ''
}

function HobbyList(props) {
    const { hobbyList, onHobbyClick, activeID } = props     

    const onActiveClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby)
        }
    }
    
    return (
        <div>
            <ul className='hobby-list'>
            {
                hobbyList.map(hobby => {
                    return (
                        <li key={hobby.id} 
                        onClick={() => onActiveClick(hobby)}
                        className={hobby.id === activeID ? 'active' : ''}
                        >
                            {hobby.title}
                        </li>
                    )
                })
            }
        </ul>
        </div>
    );
}

export default HobbyList;