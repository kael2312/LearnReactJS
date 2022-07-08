import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Product from "features/Product/product";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route path='/product' exact component={Product}></Route>
            </Switch>
        </div>
    );
}

export default App;
