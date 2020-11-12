const express = require('express');
const router = express.Router();
const controller = require('../controller/jokeController');
const jokeModel = require('../model/joke');

router.get('/api/jokes', async (request, response) => {
    try {
        const jokelist = await jokeModel.find({})
        response.render('jokes', { jokelist: jokelist })
    } catch {
        response.render('jokes', { jokelist: [], errorMessage: 'Jokes could not be loaded' })
    }
})

// Poster en ny joke
router.post('/api/jokes', async (request, response) => {
    const setup = request.body.setup;
    const punchline = request.body.punchline;
    const newJoke = new jokeModel({ setup: setup, punchline: punchline })
    try {
        await newJoke.save()
        const jokelist = await jokeModel.find({})
        response.render('jokes', { jokelist: jokelist })
    } catch (error) {
        const jokelist = await jokeModel.find({})
        response.render('jokes', { jokelist: jokelist, errorMessage: 'Your joke had the wrong format' })
    }
})

module.exports = router