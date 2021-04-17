import React, {useState} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignUp from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import "./components/Map/Map.css"
import GetStarted from "./views/GetStarted/GetStarted";
import Quizzes from "./views/Quizzes/Quizzes";
import Leaderboards from "./views/Leaderboards/Leaderboards";
import PrivateRoute from "./components/Authentication/PrivateRoute";

const App = () => {
    const [content, setContent] = useState("");
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/GetStarted" component={GetStarted} />
				<PrivateRoute exact path="/Quizzes" component={Quizzes} />
                <Route exact path="/Signup" component={SignUp}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Leaderboards" component={Leaderboards}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
                <Route exact path="/">
                    <Redirect to="/GetStarted"/>
                </Route>
                <Route component={NotFound}/>

            </Switch>
        </div>
    );
}

export default App;
