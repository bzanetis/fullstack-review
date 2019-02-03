const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() {   console.log('DATABASE OPEN'); });

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);



let save = (results) => {
  console.log(results.length, "<><><>")
  for (var i = 0; i < results.length; i++) {
    //instantiate new instance of the collection & build out entry w/cols set below
    var data = new Repo ({
      id: results[i].id,
      name: results[i].name,
      owner: results[i].owner.login,
      forks: results[i].forks,
      watchers: results[i].watchers
    });
    data.save(function(err) {
      if (err) {
        console.log('err saving result repos to db')
        return handleError(err);
      }
    });
  }
};

//find/sort function ---> queries db for a specific collection
//loops through collection checking forks col
//input:
  //use sort by descend method on forks key: db.repo.find().sort( { forks: -1 } )
let findTopRepos = function(){
  let query = Repo.find({}).sort({forks: -1}).limit(25);
  return query.exec();
  // Repo.find(function(err, docs) {
  //   callback(docs);
  // }).sort( { forks: -1 }).limit(25);

};

module.exports.findTopRepos = findTopRepos;
module.exports.Repo = Repo;
module.exports.save = save;
