const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() {   console.log('DATABASE OPEN'); });

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  repo_url: String,
  owner: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

data.save().then(function(err) {
  if (err) {
  return handleError(err);
  }
});


let save = (repos) => {

  var data = new Repo ({
    id: repos.id,
    name: repos.name,
    repo_url: repos.repo_url,
    owner: repos.owner.login,
    forks: repos.forks,
    watchers: repos.watchers
  })
  data.save().then(function(err) {
    if (err) {
    return handleError(err);
    }
  });
};

module.exports.Repo = Repo;
module.exports.save = save;