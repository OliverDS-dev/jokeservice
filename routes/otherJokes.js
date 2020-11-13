const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
// const controller = require('../controller/jokeController');
const jokeModel = require('../model/joke');


router.get('/api/otherjokes', async (req, res) =>{
    try{
    let registryUrl = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
    let data = await registryUrl.json();
    // const jokelist = await jokeModel.find({});
    res.render('otherjokes', {registryUrl: data});
} catch(error){

}
});

module.exports = router