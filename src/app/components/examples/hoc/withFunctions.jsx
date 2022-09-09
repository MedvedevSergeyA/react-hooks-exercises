import React, { useState } from "react";

const WithFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("auth"))
    );
    const handleLogin = () => {
        localStorage.setItem("token", true);
        setIsAuth(true);
    };
    const handleLogout = () => {
        localStorage.setItem("auth", false);
        setIsAuth(false);
    };

    return (
        <Component
            {...props}
            login={handleLogin}
            logout={handleLogout}
            isAuth={isAuth}
        />
    );
};

export default WithFunctions;
