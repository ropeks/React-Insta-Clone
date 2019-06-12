import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './posts.css';

const images = {
    isLiked: "https://img.icons8.com/material-outlined/24/000000/filled-like.png",
    isNotLiked: "https://img.icons8.com/material/24/000000/filled-like.png"
}

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: [],
            isLiked: false
        }
    }

    componentDidMount() {
        this.setState({ likes: this.props.likes });
    }

    likeIt = () => {
        let likes = this.state.likes;
        !this.state.isLiked ? likes++ : likes--;
        this.setState(state => ({ likes: likes, isLiked: !state.isLiked }))
    }

    whatImage = () => this.state.isLiked ? 'isNotLiked' : 'isLiked';

    render() {
        const img = this.whatImage();
        return (
            <div className="post-container">
                <div className="user">
                    <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
                    <div className="username">
                        <strong>{this.props.post.username}</strong>
                    </div>
                </div>
                <img className="posted-img" src={this.props.post.imageUrl} alt="image" />
                <div className="likes">
                    <div>{this.state.likes} likes</div>
                    <img src={images[img]} onClick={this.likeIt} alt="like image"></img>
                </div>
                <CommentSection comments={this.props.post.comments} />
            </div>
        );
    }
}

export default PostContainer;