import React from 'react';
import {InputContainer, Input, Button} from "../StyledComps/InputStyles";

export default class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <InputContainer>
                <form onSubmit={this.props.login}>
                    <Input 
                        placeholder="username"
                        value={this.props.username} 
                        onChange={this.props.change}
                    />
                    <Button onClick={this.props.login}>Login</Button>
                </form>
            </InputContainer>
            
        );
    }
}