import React from 'react';
import './comments.css';

class CommentSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="comment-section">
                {
                    this.props.comments.map(comment => (
                        <div className="comment" key={comment.id}>
                            <strong>{comment.username}: </strong>
                            <span>{comment.text}</span>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default CommentSection;