const express = require('express');
const router = express.Router();
const controller = require('../controller/jokeController');

router.get('/api/jokes', async(req, res) =>{
    const jokes = await controller.getJokes();
    res.render('jokes', {title : 'Great Jokes'})
})