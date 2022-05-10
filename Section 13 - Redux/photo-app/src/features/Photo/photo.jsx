import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/MainPage/main-page';
import AddEditPage from './pages/AddEditPage/add-edit-page';
import Banner from '../../components/Banner/banner';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch()

    return (
        <div>
            
            <Switch>
                <Route exact path={match.url} component={MainPage}></Route>
                <Route path={`${match.url}/add`} component={AddEditPage}></Route>
                <Route path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            </Switch>
        </div>
    );
}

export default Photo;