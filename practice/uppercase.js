// var http=require('http');
// var uc=require('upper-case')
// http.createServer(function(req,res){
//     res.write(uc.upperCase('hello india hello india hello india'));

//     res.end();
// }).listen(4220)

// var http=require('http');
// var input= `<h1>form</h1>
// <input type="text"/><br>
// <br><input type="text"/>
// <br><br><input type="text"/>`

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':"text/html"});

//     res.write('<h1>hello</h1>');
//     res.write('<h2> HELLO WORLD</h2>');
//     res.write('input type="text"/>');

//     res.write(input);
//     res.end();
// }).listen(4567)

// var http=require('http');
// var fs=require('fs');
// http.createServer(function(req,res){
//     fs.readFile('demo.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);

//         return res.end();
//     })
// }).listen(4009)

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});







