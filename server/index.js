const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/Voyage');

const app = express();

app.use(express.static(`${__dirname}/../client/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('PicVoyage best app ever'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/../client/public/` });
});

app.get('/search/:city', function(req, res) {
  let city = req.path.slice(7);
  // console.log('request :)', req.path.slice(7));
  res.send('here');
})

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`listenting on ${port}`)
});

module.exports = server;

//route to return all existing voyages from the DB that belong to the specified username
//this should be called when pressing the book icon 
app.get('/voyages', db.fetchAllVoyages, (req, res) => {
  res.end();
})

//route to save a voyage to the DB for the specified username
//will post the incoming data to the DB and return the updated list of that user's voyages
//this should be called when pressing the save button
app.post('/voyages', db.saveVoyage, db.fetchAllVoyages, (req, res) => {
  res.end();
})
