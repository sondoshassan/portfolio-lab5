'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
server.use(express.static('./public'));
// http://localhost:3000/test
server.get('/test',(request,response)=>{
    response.send('Hello World');
});
// http://localhost:3000/data
server.get('/data',(request,response)=>{
    let arrayObject = [
        {name:'sondos'},
        {age:23}
    ];
    response.json(arrayObject);
});


server.listen(PORT,() =>{
    console.log('listening on', PORT);
});
