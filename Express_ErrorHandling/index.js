const express  = require('express');
const morgan  = require('morgan');
const AppError = require('./AppError');

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
    throw new AppError('Password Required!',401);
    //res.send('You Need Password!!!');
   // throw new Error('password Required')
}


app.get('/',(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("Home Page!");
})

app.get('/error',(req,res)=>{
    chicken.flY();
})

app.get('/dogs',(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("woof woof!");
})

app.get('/secret',verifyPassword,(req,res)=>{
    console.log(`requst Date: ${req.requestTime}`);
    res.send("I am a good boy but you don't know it");
})

app.get('/admin',(req,res)=>{
    throw new AppError('you are not Admin',403)
})

app.use((req,res)=>{
    res.status(404).send('Not Found');
})

// app.use((err,req,res,next)=>{
//     console.log('*********************')
//     console.log('*****Error***********')
//     console.log('**********************')
//     //res.status(500).send('We got Error');
//     next(err)
// })

app.use((err,req,res,next)=>{
    const {status = 500, message = 'something went wrong!'} = err;
    res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log("app is listening on Localhost 3000");
})