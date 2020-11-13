const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const jokeModel = require('../model/joke');



router.get('/othersites', async (req, res) =>{
    try {
        let registryUrl = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
        let data = await registryUrl.json();
        res.render('othersites', {registryUrl: data})
    } catch (error) {
        if(error.code === 'ENOTFOUND'){
            res.render('othersites', {registryUrl: [], errorMessage: 'Server not up'})
        }else{
            response.render('othersites', {registryUrl: [], errorMessage: 'Something went wrong'})
        }
    } 
});

router.get('/otherjokes/:site', async (req,res) =>{
    let registryUrl = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
    let sitename = req.params.site;
    let data = await registryUrl.json();
    let url;
    for(let i = 0; i < data.length; i++){
        if(data[i].name === sitename){
            url = data[i].address;
            break;
        }
    }
    if(url.substr(-1) !== '/'){
        url = url + '/';
    }
    let chosenSite = await fetch(url + 'api/jokes');
    let chosendata = await chosenSite.json();
    console.log(url);
    console.log(chosendata);
    res.render('otherjokes', {jokelist: chosendata})
    // const jokelist = await jokeModel.find({});
    // res.render('otherjokes', {registryUrl: data});
});

module.exports = router;