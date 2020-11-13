const express = require('express');
const router = express.Router();
// const controller = require('../controller/jokeController');
const jokeModel = require('../model/joke');

router.get('/otherjokes', async (request, response) => {
        const jokelist = await jokeModel.find({})
        response.render('otherjokes')
});

module.exports = router