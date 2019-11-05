import React from 'react';
import Head from "./components/head/Head";
import Home from "./components/home/Home";
import Foot from "./components/foot/Foot";
import List from "./components/List";
import Single from "./components/Single";
import Login from "./components/Login";
import {BrowserRouter as Router,Route,Switch}from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Head/>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/list' component={List}/>
                    <Route exact path='/single/:id' component={Single}/>
                </Switch>
                <Foot/>
            </Router>
        </div>
    );
}

export default App;
