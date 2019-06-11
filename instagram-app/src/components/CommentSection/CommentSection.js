import React from 'react';
import uuid from "uuid";
import './comments.css';

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
        this.setState({
            comments: this.state.comments.concat({
                id: uuid(),
                username: "ropeks",
                text: this.state.addComment
            }),
            addComment: ""
        });
    }

    render() {
        return (
            <div className="comment-section">
                {
                    this.state.comments.map(comment => (
                        <div className="comment" key={comment.id}>
                            <strong>{comment.username}: </strong>
                            <span>{comment.text}</span>
                        </div>
                    ))
                }
                <form onSubmit={this.addComment}>
                    <input 
                    placeholder="add comment"
                    onChange={this.changeHandler}
                    value={this.state.addComment}
                    />
                    <button onClick={this.addComment}>Comment</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;