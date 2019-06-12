import React from 'react';
import './login.css';

export default class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form className="login-container">
                <input  className="login-input" />
                <button>Login</button>
            </form>
        );
    }
}