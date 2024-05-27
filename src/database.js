require("dotenv").config();

const mongoose = require('mongoose');

const databaseUrl = process.env.MONGO_URL;

mongoose.connect(databaseUrl)
    .then(db => console.log("DB is conected to", db.connection.host))
    .catch(err => console.error(err));