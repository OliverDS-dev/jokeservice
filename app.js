const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('view engine', 'pug');

// mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
//     { useNewUrlParser: true, useUnifiedTopology: true });

    // process.env.PORT lets the port be set by heruko
    let port = process.env.PORT || 8080;
    app.get('/', function(req, res){
        res.render('frontpage');
    })
    
    app.get('/jokes', function(req, res) {
        res.render('jokes');
    });
    app.get('/api/otherjokes', function(req, res) {
        res.render('otherjokes');
    });

    app.get('/api/othersites', function(req, res){
        res.render('othersites');
    });

    //Routes
    // const jokeRouter = require('./routes/jokes');
    app.listen(port, ()=>{  console.log("Listening on the port " + port + "...");});
 