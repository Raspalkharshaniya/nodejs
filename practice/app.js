
// function fun(a,b){
//     sum = a + b
//     return sum
// }


// console.log(fun(12,4));

// const hello =()=> {
//     console.log("hello world")
// }
// hello();

// var http=require('http');
// http.createServer(function(req,res)
// {
//     res.write('<h1>hello form node js server</h1>');
//     res.write('hello form node js server2<br>');
//     res.write('hello form node js server3');
//     res.end();
// }).listen(6852)


// var sum=require('./demo')
// console.log(sum(20,60));

app.get('/',function(req,res)
{
    res.send("welcome to my page")
});


