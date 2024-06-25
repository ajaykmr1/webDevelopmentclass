const express = require("express");
const app = express();


// app.use((req, res)=>{
//     console.log("we got a new reqest!!!")
//     res.send("hello we got your request!!!!!!!!!!!")
// })

//postrequest
// query


//automaticaly restart the server



app.get('/r/:subredit',(req,res)=>{
    const {subredit} = req.params;
    res.send(`hello from ${subredit}`)
})

// app.get('/cats',(req,res) => {
//    // const {q} = req.query;
//     res.send('mewww!!')
// })

app.listen(3000,()=>{
    console.log("listning to port no. 3000!")
})
