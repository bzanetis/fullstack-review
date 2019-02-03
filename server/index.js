const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('../database/index.js');
let repo = require('../database/index.js').Repo;
let save = require('../database/index.js').save
let getReposByUsername = require('../helpers/github.js');
let findTopRepos = require('../database/index.js').findTopRepos;

//app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


//app.something ---> heandles the http methods
//end of client post req, beginning of github post req
app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let username = '';
    req.on('data', chunk => {
        username += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        console.log(username);
        getReposByUsername(username, function(data) {
          //callback takes data and writes it to db
        save(data);
        });
        res.end();
    });

  console.log('Post from client successful')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  findTopRepos(function(docs) {
    console.log(typeof docs)
    res.json(docs)
  });
    console.log(findTopRepos)

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
  //db.save();
});



