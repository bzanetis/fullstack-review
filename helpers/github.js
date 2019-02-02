const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API



  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, function (err,res,body) {
    if (err) {
      console.log(err)
    }
    if (res.statusCode !== 200 ) {
      console.log(res.statusCode)
    }
    callback(body)
  });
};

//request(options, callback);
module.exports = getReposByUsername;




// const options = {
//     url: 'https://www.reddit.com/r/funny.json',
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Accept-Charset': 'utf-8',
//         'User-Agent': 'my-reddit-client'
//     }
// };

// request(options, function(err, res, body) {
//     let json = JSON.parse(body);
//     console.log(json);
// });


