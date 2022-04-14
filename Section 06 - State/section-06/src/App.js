import logo from "./logo.svg";
import "./App.css";
import Color from "./components/Color/color";
import Counter from "./components/Counter/counter";
import Todo from "./components/Todo/todo";

function App() {
  return (
    <div>
      <Color></Color>
      <Counter></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;
