const express = require('express');
const router = express.Router();
const controller = require('../controller/jokeController');
const jokeModel = require('../model/joke');

router.get('/api/jokes', async(req, res) =>{
    const jokes = await jokeModel.find({});
    res.render('jokes', {title : 'Great Jokes'}, {jokeList : jokes})
});

router.post('/api/jokes', async(req, res) => {
    const joke = {
        setup: req.params.setup,
        punchline: req.params.punchline
    };
    if(!joke.setup || !joke.punchline) {
        return res.status(400).json({ msg: 'Please include both a setup and a punchline'});
    };
    controller.createJoke(req.params.setup, req.params.punchline);
    res.render('jokes', {title : 'Great Jokes'}, {jokeList : jokes});
})

module.exports = router;