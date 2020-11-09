const mongoose = require('mongoose');
let http = require('http');
let express = require('express');

mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
    { useNewUrlParser: true, useUnifiedTopology: true });

    // process.env.PORT lets the port be set by heruko
    let port = process.env.PORT || 8080;
    
    http.createServer(function(req, res){
        res.writeHead(200);
        res.write("Amanda Leighton Schjoedt er en cutie\n");
        res.write("Amanda Leighton Schjoedt er en cutie\n");
        res.end();
    }).listen(port);

    http.get('/test', function(req, res) {
        res.send('Penis');
    });
    
    console.log("Listening on the port " + port + "...");