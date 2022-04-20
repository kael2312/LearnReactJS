import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick : null
}

function TodoList({todos, onTodoClick}) {

    const onItemClick = (id) => {
        onTodoClick(id)
    }
    

    return (
        <div>
            <ul>
                {
                    todos.map(todo => {
                        return <li onClick={() => onItemClick(todo.id)} key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;