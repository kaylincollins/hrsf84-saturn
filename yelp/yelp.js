var db = require('../database/index');
var request = require('request');
var token;


var yelp = function(city, cb) {
  var term = 'restaurants';
  var options = {
    url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${city}`,
    headers:{
      'Authorization': `Bearer ${token}`,
    },
  }

  request.get(options, function(err, response, body) {
    var restaurants = JSON.parse(body).businesses;
    var tourist = 'tourist attractions';
    var attractionsOptions = {
      url: `https://api.yelp.com/v3/businesses/search?term=${tourist}&location=${city}`,
      headers:{
        'Authorization': `Bearer ${token}`,
      },
    }
    request.get(attractionsOptions, function(err, response, body) {
      var attractions = JSON.parse(body).businesses;
      var cityPics = restaurants.concat(attractions);
      // console.log('R and T ', cityPics)
      cb(cityPics)
    })
  })
}

var yelpToken = function(cb) {
  var options = {
    url: `https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${process.env.CLIENTID}&client_secret=${process.env.CLIENTSECRET}`,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    },
  }
  request.post(options, function(err, response, body) {
    token = JSON.parse(body).access_token;
    cb('Got Token');
  })
}

module.exports.yelp = yelp;
module.exports.yelpToken = yelpToken;