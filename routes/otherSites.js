const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');



router.get('/api/othersites', async (req, res) =>{
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
})

module.exports = router;