const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const voyageSchema = new mongoose.Schema({
  id: String,
  list: Array, 
  username: String,
  location: String
});

const Voyage = mongoose.model('Voyage', voyageSchema);

module.exports.Voyage = Voyage;

module.exports.fetchAllVoyages = (req, res, next) => {
  Voyage.find({username: req.body.username}, function(err, voyages) {
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
  newVoyage.save()
  .catch( () => console.log('error') )
  .then( () => next() )
}
