import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignUp from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Signup" component={SignUp}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/">
                    <Redirect to="/Home"/>
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
