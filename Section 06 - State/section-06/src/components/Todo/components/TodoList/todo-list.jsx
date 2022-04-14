import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './todo-list.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defautProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({todoList, onTodoClick}) {

    const onTodoItemClick = (value, index) => {
        if(!onTodoClick) return;
        onTodoClick(value, index);
    }

    return (
            <ul>
                {
                    todoList.map((value, index) => {
                        return <li 
                                    key={value.id}
                                    className={classNames({
                                        'todo-item': true,
                                        completed: value.status === 'completed'
                                    })}
                                    onClick={() => onTodoItemClick(value, index)}
                                >
                                    {value.title}
                                </li>
                    })
                }
            </ul>
    );
}

export default TodoList;