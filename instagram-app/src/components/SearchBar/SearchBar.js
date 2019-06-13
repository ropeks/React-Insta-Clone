import React from 'react';
import {InputContainer, Input, Button} from "../StyledComps/InputStyles";

export default class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <InputContainer>
                <form onSubmit={this.props.search}>
                    <Input
                        placeholder="search"
                        value={this.props.value}
                        onChange={this.props.change}
                    />
                    <Button onClick={this.props.search}>Search</Button>
                    <Button onClick={this.props.logout}>Logout</Button>
                </form>
            </InputContainer>
        );
    }
}
