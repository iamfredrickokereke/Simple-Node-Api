
const express = require('express');
const app = express();


app.use(express.json());



app.get('/info', (request, response) => { 

    console.log(request.url);
    console.log(request.query);
    response.json({

        name : request.query.name,
        job : request.query.job,
    message : `Your name is ${request.query.name} and you are a ${request.query.job}`
    })

})



api.post('/sendInfo', (request, response) => {

    console.log(request.body)

    response.json({
        name : request.body.name,
        job : request.body.job,
    message : `Your name is ${request.body.name} and you are a ${request.body.job}`
    })
    
} )


api.listen(8000);