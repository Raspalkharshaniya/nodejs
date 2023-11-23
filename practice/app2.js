const express = require('express');
const app=express();

app.get('/',function(req,res)
{
    res.send("welcome to my home page")
});

app.get('/about',function(req,res)
{
    res.send("welcome to my about  page")
});

app.get('/service',function(req,res)
{
    res.send("welcome to my service page")
});

app.get('/blog',function(req,res)
{
    res.send("welcome to my blog page")
});

app.listen(8000)


