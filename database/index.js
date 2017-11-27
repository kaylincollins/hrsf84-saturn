const mongoose = require('mongoose');

const mongoUri = `mongodb://${process.env.SATURNDB}`;

const db = mongoose.connect(mongoUri, { useMongoClient: true });

module.exports = db;
