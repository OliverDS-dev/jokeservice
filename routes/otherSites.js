const express = require('express');
const router = express.Router();
const link = "https://krdo-joke-registry.herokuapp.com/api/services";

router.get('/api/othersites', async (req, res)=>{

    let site = {
        id: req.body.id,
        address: req.body.address,
        name: req.body.name
    }
    let sites = {};
    res.render('othersites', {title: "Andre sider med jokes", })
})

