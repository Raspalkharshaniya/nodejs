var mongoose = require('mongoose');

const addcontactschema = new mongoose.Schema({
 
    name:{
        type:String,
        required: true
        
    },

    email:{
        type:String,
        required: true
    },

    message:{
        type:String,
        required: true
       
    },

  

})


const addcontact = new mongoose.model('contact',addcontactschema);
module.exports = addcontact;
