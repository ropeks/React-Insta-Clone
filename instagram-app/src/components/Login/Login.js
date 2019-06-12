import React from 'react';
import './login.css';
import '../SearchBar/search.css';

export default class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form className="login-container" onSubmit={this.props.login}>
                <input 
                    value={this.props.username} 
                    onChange={this.props.change}
                    className="input" 
                />
                <button onClick={this.props.login}>Login</button>
            </form>
        );
    }
}