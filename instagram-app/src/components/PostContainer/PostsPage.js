import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default class PostsPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <SearchBar search={this.props.searchIt} logout={this.props.logout} value={this.props.search} change={this.props.changeHandler} />
                {
                    this.props.data.map(post => (
                        <PostContainer
                            className="post"
                            post={post}
                            key={post.id}
                            likes={post.likes}
                        />
                    ))
                }
            </>
        );
    }
}