import React, { useState } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignUp from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import ReactTooltip from "react-tooltip";
import "./components/Map/Map.css"
import MapChart from "./components/Map/Map";

const App = () => {
    const [content, setContent] = useState("");
    return (
        <div>
            <NavBar/>
           {/* <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Signup" component={SignUp}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
                <Route exact path="/">
                    <Redirect to="/Home"/>
                </Route>
                <Route component={NotFound}/>
            </Switch>*/}
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
}

export default App;
