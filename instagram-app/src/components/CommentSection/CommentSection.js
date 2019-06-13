import React from 'react';
import uuid from "uuid";
import {InputContainer, Input, Button} from "../StyledComps/InputStyles";

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            addComment: ""
        }
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments });
    }

    changeHandler = event => {
        this.setState({ addComment: event.target.value });
    };

    addComment = event => {
        event.preventDefault();
        if (this.state.addComment !== "") {
            this.setState({
                comments: this.state.comments.concat({
                    id: uuid(),
                    username: "ropeks",
                    text: this.state.addComment
                }),
                addComment: ""
            });
        }
        
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => (
                        <div key={comment.id}>
                            <strong>{comment.username}: </strong>
                            <span>{comment.text}</span>
                        </div>
                    ))
                }
                <form onSubmit={this.addComment}>
                    <Input
                        placeholder="add comment"
                        value={this.state.addComment}
                        onChange={this.changeHandler}
                    />
                    <Button onClick={this.addComment}>Comment</Button>
                </form>
            </div>
        );
    }
}

export default CommentSection;