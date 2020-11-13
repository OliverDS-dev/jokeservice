const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
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
    app.use(jokeRouter);
    app.use(otherSiteRouter);

    const fetch = require('node-fetch');
let registryUrl = 'https://krdo-joke-registry.herokuapp.com/api/services';

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK
    // if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await post(url,
            {
                "name": "DAVO Jokeservice",
                "address": "https://jokeservicedao.herokuapp.com/",
                "secret": "i like men",
            }
        );
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(registryUrl);

    app.listen(port, ()=>{  console.log("Listening on the port " + port + "...");});
 