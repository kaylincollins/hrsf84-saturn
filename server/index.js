const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/public`));

app.get('/', (req, res) => res.send('PicVoyage best app ever'));

const port = process.env.PORT || 3000;
const server = app.listen(port);

module.exports = server;
