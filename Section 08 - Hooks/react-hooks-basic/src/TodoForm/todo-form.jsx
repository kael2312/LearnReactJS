import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onAddTodo: PropTypes.func
};

TodoForm.defaultProps = {
    onAddTodo: null
}

function TodoForm({onAddTodo}) {
    const [todoInput, setTodoInput] = useState('')

    const onInputChange = (value) => {
        setTodoInput(value)
    }

    const onSubmitTodoForm = (e) => {
        e.preventDefault();
        onAddTodo(todoInput)
    }

    return (
        <div>
            <form action="">
                <input onChange={(e) => onInputChange(e.target.value)} type="text" placeholder='input todo' />
                <button onClick={(e) => onSubmitTodoForm(e)} type="submit">OK</button>
            </form>
        </div>
    );
}

export default TodoForm;