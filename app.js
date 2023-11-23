
const express = require('express');

const app = express();
const db= require('./db/connection');
const bodyParser= require('body-parser');

const path =require('path');

var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('assets'));
app.use('/css',express.static(__dirname+'/node_module/bootstrap/dist/css'));
app.use('/css',express.static(__dirname+'/node_module/boostrap/dist/js'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 app.use('/upload', express.static('upload'));



app.use(cookieParser());
app.use(
    session({
        key:"user_sid",
        secret: "somerandonstuffs",
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires:6000000,
        },
    })
);

app.use((req,res, next) =>{
    if (req.cookies.user_sid && !req.session.user){
        res.clearCookie("user_sid");
    }
    next();
});

var sessionChecker = (req,res,next) => {
    if(req.session.user && req.cookies.user_sid){
        res.redirect("/dashboard");
    } else{
        next();
    }
};


app.use( require('./router/controller'));








// app.use('/',router)
app.listen(8080, ()=>{
    console.log("listing to 8000 port")
});
