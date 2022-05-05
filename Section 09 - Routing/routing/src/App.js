import logo from "./logo.svg";
import "./App.css";
import Color from "./components/Color/color";
import Counter from "./components/Counter/counter";
import Todo from "./components/Todo/todo";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
    return (
        <div>
            Home Page
            <ul>
                <li>
                    <NavLink to="/todo">Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/counter">Counter</NavLink>
                </li>
                <li>
                    <NavLink to="/color">Color</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/todo" component={Todo}></Route>
                <Route path="/counter" component={Counter}></Route>
                <Route path="/color" component={Color}></Route>
            </Switch>
        </div>
    );
}

export default App;
