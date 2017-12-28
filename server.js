const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (reqS,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req,res)=>{
    console.log("Well hello !")
});

app.listen(3000, function() {
    console.log("Listening on 3000");
});

