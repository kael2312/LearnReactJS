import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HobbyList from '../components/HobbyList/hobby-list';
import casual from 'casual-browserify';
import { useDispatch, useSelector } from 'react-redux';
import { addHobby, setActiveHobby } from '../redux/actions/hobby.action';

HomePage.propTypes = {
    
};

function HomePage(props) {

    const hobbyList = useSelector(state => state.hobbyReducer.list)
    const activeID = useSelector(state => state.hobbyReducer.activeID)
    const dispatch = useDispatch();

    const onRandomHobbyClick = () => {
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }

        dispatch(addHobby(newHobby))
    }

    const onHobbyClick = (hobby) => {
        dispatch(setActiveHobby(hobby))
        console.log(activeID);
    }

    return (
        <div>
            <button onClick={onRandomHobbyClick}>Random Hobby</button>
            <HobbyList activeID={activeID} hobbyList={hobbyList} onHobbyClick={onHobbyClick}></HobbyList>
        </div>
    );
}

export default HomePage;