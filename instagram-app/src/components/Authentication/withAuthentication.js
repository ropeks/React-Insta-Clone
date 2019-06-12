import React from 'react';

function withAuthentication(Component) {
    return class Authentication extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthed: false
            }
        }
      
        render() {
            return (
                <Component isAuthed={this.state.isAuthed} />
            );
        }
    }
}

export default withAuthentication;