const express = require('express');
const app = express();
const shelterRoute = require('./routes/shelters');
const dogRoute = require('./routes/dogs');
const adminRoute = require('./routes/admin');

app.use('/shelters',shelterRoute);
app.use('/dogs',dogRoute);
app.use('/admin',adminRoute);

app.listen(3000,() =>{
    console.log('server is listening on localhost:3000');
})

