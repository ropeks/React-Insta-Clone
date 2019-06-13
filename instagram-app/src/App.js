import React from 'react';
import dummyData from './dummy-data';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthentication from './components/Authentication/withAuthentication';
import {AppStyles} from './components/StyledComps/AppStyles'
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
      this.setState({
        searchValue: ""
      });
      alert('there are no posts by that user');
    }

  }

  render() {
    return (
      <>
        {
          !this.props.isAuthed &&
          <AppStyles login>
            <Login login={this.props.login} username={this.props.username} change={this.props.change} /> :
          </AppStyles>
        }
        {
          this.props.isAuthed &&
          <AppStyles>
            <PostsPage 
              data={this.state.data} 
              search={this.state.searchValue} 
              searchIt={this.searchIt} 
              changeHandler={this.changeHandler} 
              logout={this.props.logout}
            />
          </AppStyles>
        }
      </>
    );
  }
}

export default withAuthentication(App);
