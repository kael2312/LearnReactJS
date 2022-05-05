import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './page/ListPage/list-page';
import DetailPage from './page/DetailPage/detail-page';
import { useRouteMatch } from 'react-router-dom';
import NotFound from '../NotFound/not-found';
Todo.propTypes = {
    
};

function Todo(props) {
    const match = useRouteMatch()
    
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} exact component={DetailPage}></Route>

                <Route component={NotFound}></Route>
            </Switch>
        </div>
    );
}

export default Todo;