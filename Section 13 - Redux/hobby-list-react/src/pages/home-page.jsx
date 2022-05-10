import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/HobbyList/hobby-list';
import  casual  from "casual-browserify";
import { addNewHobby, setActiveHobby } from '../redux/actions/hobby.action';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobbyReducer.list)
    const activeId = useSelector(state => state.hobbyReducer.activeId)
    const dispatch = useDispatch();
    
    const handleAddHobbyClick = () => {
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }

        const action = addNewHobby(newHobby);
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }
    return (
        <div>
            <h1>Redux hooks - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick}></HobbyList>
        </div>
    );
}

export default HomePage;