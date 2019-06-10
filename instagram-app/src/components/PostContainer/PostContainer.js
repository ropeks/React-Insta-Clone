import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './posts.css';

class PostContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="post-container">
                <CommentSection />
            </div>
        );
    }
}

export default PostContainer;