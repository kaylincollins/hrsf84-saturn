var db = require('../database/index');
var request = require('request');
var token;
var expires;
var date;
var currentTime;


var yelp = function(city, cb) {
  if (date === undefined || !tokenValid()) {
    grabToken(function() {
      grabPictures(city, cb);
    });
  } else {
    grabPictures(city, cb);
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
    cb()
  })
}

var grabPictures = function(city, cb) {
  var term = 'restaurants';
  var options = {
    url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${city}&limit=50`,
    headers:{
      'Authorization': `Bearer ${token}`,
    },
  }

  request.get(options, function(err, response, body) {
    var restaurants = JSON.parse(body).businesses;
    var tourist = 'tourist attractions';
    var attractionsOptions = {
      url: `https://api.yelp.com/v3/businesses/search?term=${tourist}&location=${city}&limit=50`,
      headers:{
        'Authorization': `Bearer ${token}`,
      },
    }
    request.get(attractionsOptions, function(err, response, body) {
      var attractions = JSON.parse(body).businesses;
      var cityPics = restaurants.concat(attractions);
      randomize(cityPics, function(randomizedPics) {
        cb(randomizedPics);
      })
    })
  })
}

var randomize = function(cityPics, cb) {
  cityPics.sort(function(picOne, picTwo){
    if (picOne.rating > picTwo.rating) {
      return -1;
    } 
    if (picOne.rating < picTwo.rating) {
      return 1;
    }
    return 0;
  })
  cb(cityPics);
}

module.exports.yelp = yelp;