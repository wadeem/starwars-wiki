import React from "react";

const LoginPage = ({isLoggedIn, onLogin}) => {

    return <div className="jumbotron">
        <p>Login to see secret page!</p>
        <button onClick={onLogin} className="btn btn-primary">Log in</button>
    </div>
};

export default LoginPage;