import React from "react";
import {Redirect} from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {

    if (isLoggedIn) {
        return <Redirect to="/secret"/>
    }

    return <div className="jumbotron">
        <p>Login to see secret page!</p>
        <button onClick={onLogin} className="btn btn-primary">Log in</button>
    </div>
};

export default LoginPage;