const mongoose=require('mongoose');

var conn=mongoose.connect("mongodb+srv://raspalkharshania:admin123@cluster0.qhg5zie.mongodb.net/mytesting?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=> console.log("connection succesfully..."))
    .catch((err)=>console.log(err));
    
    module.exports=conn;
