const fs = require('fs');
fs.mkdir('dog',{recursive: true},(err)=>{
    if(err) throw err;
});