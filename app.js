const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

//app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.get('/calc2JS/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/calc2JS','index.html'));
});

app.get('/calc3JS/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/calc3JS','index.html'));
});

app.get('/calcReact/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/calcReact','index.html'));
});

app.get('/ClientServer/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/ClientServer','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //database work here
    res.send('successfully posted data');
});

app.listen(3000);