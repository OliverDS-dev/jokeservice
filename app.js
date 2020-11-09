const mongoose = require('mongoose');
let http = require('http');
let express = require('express');
const app = express();
app.set('view engine', 'pug');
const config = require('./config');

// mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
//     { useNewUrlParser: true, useUnifiedTopology: true });

    // process.env.PORT lets the port be set by heruko
    let port = process.env.PORT || 8080;
    app.get('/', function(req, res){
        res.send('weenis')
    })
    
    app.get('/test', function(req, res) {
        res.send('nenis');
    });

    //Routes
    const jokeRouter = require('./routes/jokes');

    app.listen(config.PORT, ()=>{  console.log("Listening on the port " + port + "...");})
 