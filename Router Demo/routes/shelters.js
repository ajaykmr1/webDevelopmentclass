const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('All Shelters')
})

router.post('/',(req,res)=>{
    res.send('creating Shelters');
})

router.get('/:id',(req,res)=>{
    res.send('VIEWING ON SHELTER');
})

router.get('/:id/edit',(req,res)=>{
    res.send('Edit Shelter');
})

module.exports = router;