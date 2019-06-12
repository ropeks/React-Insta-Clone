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
                <SearchBar search={this.props.searchIt} value={this.props.search} change={this.changeHandler} />
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