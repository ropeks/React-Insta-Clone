import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
