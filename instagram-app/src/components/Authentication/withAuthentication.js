import React from 'react';

function withAuthentication(Component) {
    return class Authentication extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthed: true,
                username: ''
            }
        }

        changeHandler = event => {
            this.setState({ username: event.target.value });
        };

        componentDidMount() {
            localStorage.getItem('is_authed') &&
            this.setState({ isAuthed: true });
            localStorage.getItem('username') &&
            this.setState({ username: "ropeks" });
        }

        login = () => {
            localStorage.setItem('is_authed', true);
            localStorage.setItem('username', "ropeks");
            this.setState({ 
                isAuthed: true,
                username: "ropeks"
            });
        }

        logout = () => {
            localStorage.removeItem('is_authed');
            localStorage.removeItem('username');
            this.setState({ 
                isAuthed: false,
                username: ""
            });
        }
      
        render() {
            return (
                <Component login={this.login} logout={this.logout} change={this.changeHandler} isAuthed={this.state.isAuthed} username={this.state.username} />
            );
        }
    }
}

export default withAuthentication;