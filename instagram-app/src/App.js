import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        {
          this.state.data.map(post => (
            <PostContainer 
              className="post"
              post={post}
              key={post.id}
              likes={post.likes}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
