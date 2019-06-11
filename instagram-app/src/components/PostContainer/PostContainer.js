import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './posts.css';

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: []
        }
    }

    componentDidMount() {
        this.setState({ likes: this.props.likes });
    }  

    likeIt = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes: likes });
    } 

    render() {
        return (
            <div className="post-container">
                <div className="user">
                    <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
                    <strong>{this.props.post.username}</strong>
                </div>
                <img className="posted-img" src={this.props.post.imageUrl} alt="image" onClick={this.likeIt} />
                <div className="likes">
                    {this.state.likes} likes
                </div>
                <CommentSection comments={this.props.post.comments}/>
            </div>
        );
    }
}

export default PostContainer;