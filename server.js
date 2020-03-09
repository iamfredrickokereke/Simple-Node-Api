
const express = require('express');
const app = express();


app.use(express.json());



app.get('/info', (request, response) => { 

    console.log(request.url);
    console.log(request.query);
    res.json({

        name : request.query.name,
        job : request.query.job,
    message : `Your name is ${request.query.name} and you are a ${request.query.job}`
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