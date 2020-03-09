var express = require('express');
var api = express();

//api.use()



api.get('/info', (req, res) => { 

    console.log(req.url);
    console.log(req.query);
    res.json({

        name : req.body.name,
        job : req.body.job,
    message : 'it connected successfully'
    })

});

api.listen(8000);