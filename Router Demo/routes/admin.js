const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    }
    else res.send('sorry, you are not admin')
})

router.get('/topsecret',(req,res) => {
    res.send('Here is Your secrete: you are a fool')
})

router.get('/deleteEverything',(req,res) => {
    res.send('Ok Deleted it all')
})

module.exports = router;