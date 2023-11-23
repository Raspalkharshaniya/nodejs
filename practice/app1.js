
// app.get('/',function(req,res)
// {
//     res.send("welcome to my home page")
// });

// app.get('/about',function(req,res)
// {
//     res.send("welcome to my about  page")
// });

// app.get('/service',function(req,res)
// {
//     res.send("welcome to my service page")
// });

// app.get('/blog',function(req,res)
// {
//     res.send("welcome to my blog page")
// });

// Router.get('/service',(req,res)=>{
//     res.render('/service')
// });

// Router.post('/service',(req,res)=>{
//     var a = new serviceModel (
//         fname : req.body.fname,
//     )
// })

// app.listen(8000)

 const express = require('express');
 const app=express();

const router=express.Router();

router.get('/',function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})


router.get('/about',function(req,res)
{
    res.sendFile(__dirname+"/about.html");
})


router.get('/service',function(req,res)
{
    res.sendFile(__dirname+"/service.html");
});

app.use('/',router);
app.listen(5454)