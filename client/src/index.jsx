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
  }

  //username is getting passed to server in Ajax post
  //axios.get('/api/event')



  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: '/repos',
      method: 'POST',
      contentType: 'application/json',
      data: {searchTerm: term},
      success: function(data){
        let parsedData = JSON.parse(data)
        console.log(parsedData  )
      },
      dataType: 'text'
    });
  };



  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));