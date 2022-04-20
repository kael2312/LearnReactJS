import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./ColorBox/color-box";
import TodoList from "./TodoList/todo-list";
import { useState } from "react";
import TodoForm from "./TodoForm/todo-form";

function App() {

    
    const todoList = [
        {
            id: 1,
            title: 'I love Ez FE'
        },
        {
            id: 2,
            title: 'We love Ez FE'
        },
        {
            id: 3,
            title: 'They love Ez FE'
        },
    ]

    const [todoListState, setTodoListSate] = useState(todoList)

    const handleTodoClick = (id) => {
        
        const index = todoListState.findIndex(todo => todo.id === id);
        const newTodoList = [...todoListState]
        newTodoList.splice(index, 1)
        setTodoListSate(newTodoList)
    }

    const handleAddTodoList = (value) => {
        console.log(value);
        const id = todoListState.length + 1
        const newTodoList = [...todoListState]
        newTodoList.push({id: id, title: value});
        setTodoListSate(newTodoList)
    }

    return (
        
        <div className="App">
            <ColorBox></ColorBox>
            <TodoForm onAddTodo={handleAddTodoList}></TodoForm>
            <TodoList todos={todoListState} onTodoClick={handleTodoClick}></TodoList>
        </div>
    );
}

export default App;
