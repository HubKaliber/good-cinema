const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING )
    .then(dbInstance => {
        app.set('db', dbInstance)
        return dbInstance.init()
    })
    .then(response => {
        console.log('database initialized')
    })
    .catch(error => {
        console.error(error)
    });

app.get('/api/get-movie-details', controller.getMovieDetails);
app.get('/api/get-movies-by-query', controller.getMoviesByQuery);

const port = process.env.PORT || 3000;
app.listen( port, function() {console.log(`Server listening on port ${this.address().port}.`); } );