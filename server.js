
var express = require('express');
var api = express();


api.use(express.json());



api.get('/info', (req, res) => { 

    console.log(req.url);
    console.log(req.query);
    res.json({

        name : req.query.name,
        job : req.query.job,
    message : `Your name is ${req.query.name} and you are a ${req.query.job}`
    })

})



api.post('/sendInfo', (req, res) => {

    console.log(req.body)

    res.json({
        name : req.body.name,
        job : req.body.job,
    message : `Your name is ${req.body.name} and you are a ${req.body.job}`
    })
    
} )


api.listen(8000);