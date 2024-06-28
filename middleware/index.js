const express  = require('express');
const morgan  = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(),req.path);
    next();
})

//silly authentication

const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password === 'goodpassword')
        next()
    else res.send('You Need Password!!!');
}


app.get('/',(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("Home Page!");
})

app.get('/dogs',(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("woof woof!");
})

app.get('/secret',verifyPassword,(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("I am a good boy but you don't know it");
})

app.use((req,res)=>{
    res.status(404).send('Not Found');
})

app.listen(3000, ()=>{
    console.log("app is listening on Localhost 3000");
})