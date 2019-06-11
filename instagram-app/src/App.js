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
      searchValue: ""
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  changeHandler = event => {
    this.setState({ searchValue: event.target.value });
  };

  searchIt = event => {
    event.preventDefault();
    let result = this.state.data.filter(post => {
      return post.username === this.state.searchValue
    })
    this.setState({ data: result });
  }

  render() {
    return (
      <div className="app">
        <SearchBar search={this.searchIt} value={this.state.searchValue} change={this.changeHandler} />
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
