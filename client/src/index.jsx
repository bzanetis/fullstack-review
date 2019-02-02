import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // this.search = this.search.bind(this);
    // this.get = this.get.bind(this);
    // this.getRepos = this.getRepos.bind(this);
  }

  // componentDidMount () {
  //   this.getRepos();
  // }

  //username is getting passed to server in Ajax post
  //axios.get('/api/event')
  // getRepos () {
  //   $.ajax({
  //     url: 'http://localhost:1128/repos',
  //     method: 'GET',
  //     success: function(data){
  //       console.log(data)
  //     },
  //     error: function (data) {
  //       console.log('error in Get req from client')
  //     };
  //   }
  // }



  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      contentType: 'application/json',
      data: term,
      success: function(data){
        console.log(data)
      },
      error: function (data) {
        console.log('error in Post req from client')
     }
    })
  }



  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));