var token = require('../config');
var db = require('../database/index');
var request = require('request');
var token = require('../config.js');

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

module.exports = yelp;