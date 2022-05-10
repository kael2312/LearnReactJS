import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import NotFound from "./components/NotFound/not-found";
import Header from "./components/Header/header";

// Lazy load

const Photo = React.lazy(() => import("./features/Photo/photo"));

function App() {
    return (
        <div className="">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Redirect from="/" to="/photos" exact></Redirect>

                        <Route path="/photos" component={Photo}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
