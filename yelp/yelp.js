var db = require('../database/index');
var request = require('request');
var token;
var expires;
var date = '';
var currentTime;


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
      cb(cityPics)
    })
  })
}

var yelpToken = function(cb) {
  if (date === '') {
    grabToken(cb);
  } else if (tokenValid()) {
    cb('');
  } else {
    grabToken(cb);
  }
}

var tokenValid = function() {
  currentTime = Date.now();
  if ((currentTime - date.getTime()) > expires) {
    return false;
  } else {
    return true;
  }
}

var grabToken = function(cb){
  var options = {
    url: `https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${process.env.CLIENTID}&client_secret=${process.env.CLIENTSECRET}`,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
    },
  }
  request.post(options, function(err, response, body) {
    token = JSON.parse(body).access_token;
    expires = JSON.parse(body).expires_in;
    date = new Date();
    cb('');
  })
}

module.exports.yelp = yelp;
module.exports.yelpToken = yelpToken;