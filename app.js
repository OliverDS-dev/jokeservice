const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const app = express();
app.set('view engine', 'pug');

mongoose.connect('mongodb+srv://joker:cqwNfOUXXNADTpRr@erebus.84dlo.mongodb.net/Jokes?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
  });
    // process.env.PORT lets the port be set by heruko
    let port = process.env.PORT || 8080;
    app.get('/', function(req, res){
        res.render('frontpage');
    })

    //Routes
    const jokeRouter = require('./routes/jokes');
    const otherSiteRouter = require('./routes/otherSites');
    const apiRouter = require('./routes/api');
    app.use(jokeRouter);
    app.use(otherSiteRouter);
    app.use(apiRouter);

    app.listen(port, ()=>{  console.log("Listening on the port " + port + "...");});
 