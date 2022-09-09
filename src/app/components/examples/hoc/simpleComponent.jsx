import React from "react";
import Card from "../../common/Card";
import PropTypes from "prop-types";

const SimpleComponent = ({ login, logout, isAuth }) => {
    return (
        <Card>
            {isAuth ? (
                <button className="btn btn-danger mx-2" onClick={logout}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary mx-2" onClick={login}>
                    Войти в систему
                </button>
            )}
        </Card>
    );
};

SimpleComponent.propTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
