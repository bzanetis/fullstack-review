const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  repo_url: String,
  owner: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repos => {
  for (var i = 0; i < repos.length; i++) {
  var data = new Repo {(
    id: repos.id,
    name: repos.name,
    repo_url: repos.repo_url,
    owner: repos.owner.login,
    forks: repos.forks,
    watchers: repos.watchers
  )}
  data.save(err => {
    if (err) {
      console.log('Error saving repos to db');
      return console.log(err);
    }
  })
 }
}

module.exports.save = save;