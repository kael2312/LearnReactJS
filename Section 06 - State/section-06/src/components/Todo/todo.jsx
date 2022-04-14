import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList/todo-list';

Todo.propTypes = {
};

function Todo(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        };

        setTodoList(newTodoList)
    }

    const onShowAllClick = () => {
        setFilteredStatus('all')
    }

    const onShowCompledClick = () => {
        setFilteredStatus('completed')
    }

    const onShowNewClick = () => {
        setFilteredStatus('new')
    }

    const filteredTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={filteredTodoList} onTodoClick={handleTodoClick}></TodoList>

            <div>
                <button onClick={onShowAllClick}>Show All</button>
                <button onClick={onShowCompledClick}>Show Completed</button>
                <button onClick={onShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default Todo;