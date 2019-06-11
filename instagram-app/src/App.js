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

    if (result.length > 0) {
      this.setState({
        data: result,
        searchValue: ""
      });
    } else {
      alert('there are no posts by that user');
    }

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
