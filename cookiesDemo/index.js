const express = require('express');
const app = express();
const cockieParser = require('cookie-parser');
app.use(cockieParser('thisismysecret'));


app.get('/greet', (req, res) => {
    const { name = 'No-Name' } = req.cookies;
    res.send(`hey, there ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('animal', 'lion')
    res.cookie("name", 'stevie chicks')
    res.send('ok, send you a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('ok signed your fruit cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("app is listening on Localhost: 3000")
});
