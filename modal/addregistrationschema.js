var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addregistrationschema = new mongoose.Schema({
 
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    
})

addregistrationschema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();
});

addregistrationschema.methods.comparePassword = function(plaintext,callback){
    return callback(null,bcrypt.compareSync(plaintext,this.password));
};

const addregistration = new mongoose.model('post',addregistrationschema);
module.exports = addregistration;