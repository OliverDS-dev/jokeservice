const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const jokeModel = require('../model/joke');

//Henter JSON for vores jokes
router.get('/api/jokes', async (request, response) => {
    const jokelist = await jokeModel.find({})
        response.send(JSON.stringify(jokelist));
})

//Henter JSON for andre joke services
router.get('/api/othersites', async (req, res) => {
    try {
        let registryUrl = await fetch('https://krdo-joke-registry.herokuapp.com/api/services');
        let data = await registryUrl.json();
        let JSONString = JSON.stringify(data);
        res.send(JSONString);
    } catch (error) {
        res.status(error.status).json({error : error.details});
    }
})

//Henter JSON for en given hjemmeside
router.get('/api/otherjokes/:site', async (req, res) => {
    try {
        let registryUrl = await fetch('https://krdo-joke-registry.herokuapp.com/api/services')
        let data = await registryUrl.json();
        let sitename = req.params.site;
        let url;
        let element;
        for (let i = 0; i < data.length; i++) {
            element = data[i];
            if (element.name && element.name.toLowerCase() === sitename.toLowerCase()) {
                url = element.address
                break
            }
        }
        // Hvis siden ikke findes
        if (!url) {
            throw new Error()
        }
        if (url.substr(-1) !== '/') {
            url = url + '/';
        }
        let site = await fetch(url + 'api/jokes')
        let chosenData = await site.json()
        let chosenDataJSON = JSON.stringify(chosenData)
        res.send(chosenDataJSON)
    } catch (error) {
        response.status(error.status).json({ error: error.details })
    }
})

//Tillader posting via api
router.post('/api/jokes', async (req, res) => {
    const newJoke = new jokeModel({
        setup: req.body.setup,
        punchline: req.body.punchline,
    })
    try {
        await newJoke.save();
        const jokes = await Joke.find({})
        res.status(201).json(newJoke)
    } catch (error) {
        if (error.status < 500) {
            response.status(error.status).json({ error: error.details })
        } else {
            response.status(error.status).json({ message: 'forkert format' })
        }
    }
})



module.exports = router;