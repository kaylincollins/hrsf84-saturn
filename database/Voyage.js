const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const voyageSchema = new mongoose.Schema({
  id: String,
  list: [{
    photo_id: String,
    image_url: String,
    url: String,
    display_address: Array,
  }],
  username: String,
  location: String
});

const Voyage = mongoose.model('Voyage', voyageSchema);

module.exports.Voyage = Voyage;

module.exports.fetchAllVoyages = (req, res, next) => {
  //assuming the username is on the req object as req.username
  Voyage.find({username: req.username}, function(err, voyages) {
    if (err) {
      throw err;
    } else {
      res.send(JSON.stringify(voyages));
    }
  })
}

module.exports.saveVoyage = (req, res, next) => {
  var newVoyage = new Voyage({
    list: req.body.list,
    username: req.body.username,
    location: req.body.location
  })
  newVoyage.save(function(err, updatedVoyage) {
    if (err) {
      throw err;
    } else {
      next(); //should call fetchAllVoyages to return all voyages for that user
              //and send them to the journal page
    }
  })
}
//sample item from yelp
// {"id": "twin-peaks-san-francisco", 
// "name": "Twin Peaks", 
// "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/IU1G5VuL7-DUdVTpnBbHfA/o.jpg", 
// "is_closed": false, 
// "url": "https://www.yelp.com/biz/twin-peaks-san-francisco?adjust_creative=KQcGQ_djMNa1t0OLkQseKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KQcGQ_djMNa1t0OLkQseKw", 
// "review_count": 984, 
// "categories": [{"alias": "parks", "title": "Parks"}, {"alias": "landmarks", "title": "Landmarks & Historical Buildings"}], 
// "rating": 4.5, 
// "coordinates": {"latitude": 37.7521564122127, "longitude": -122.447519302368}, 
// "transactions": [], 
// "location": {"address1": "501 Twin Peaks Blvd", "address2": null, "address3": "", "city": "San Francisco", "zip_code": "94114", "country": "US", "state": "CA", 
//   "display_address": ["501 Twin Peaks Blvd", "San Francisco, CA 94114"]}, 
// "phone": "+14158312700", 
// "display_phone": "(415) 831-2700", 
// "distance": 1375.6233249122}