import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./features/TodoForm/todo-form";

function App() {
    const handleTodoFormSubmit = (values) => {}
    
    return (
        <div className="App">
            <TodoForm onSubmit = {handleTodoFormSubmit}></TodoForm>
        </div>
    );
}

export default App;
