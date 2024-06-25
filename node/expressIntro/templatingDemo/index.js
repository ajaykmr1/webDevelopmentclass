const express  = require('express');
const path  = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))

app.get('/',(req, res)=>{
    res.render('home.ejs');
})

app.get('/rand',(req,res)=>{
    num =  Math.floor(Math.random()*10)+1;
    res.render("rand.ejs", {random: num});
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit.ejs',{subreddit})
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})