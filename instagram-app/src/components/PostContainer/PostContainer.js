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
                {
                    this.props.data.map(post => (
                        <div 
                            className="post"
                            post={post}
                            key={post.id}
                            comments={post.comments}
                        >
                            <div className="user">
                                <img className="thumbnail" src={post.thumbnailUrl} alt="thumbnail" />
                                <strong>{post.username}</strong>
                            </div>
                            <img className="posted-img" src={post.imageUrl} alt="image" />
                            <CommentSection comments={post.comments}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default PostContainer;