
var express = require('express');
var api = express();

//api.use()



api.get('/info', (req, res) => { 

    console.log(req.url);
    console.log(req.query);
    res.json({

        name : req.query.name,
        job : req.query.job,
    message : `Your name is ${req.query.name} and you are a ${req.query.job}`
    })

}).listen(8000);



api.post('/sendInfo', (req, res) => {

    console.log(req.body)
    
} )