var mongoose = require('mongoose');

const addpackageschema = new mongoose.Schema({
 
    packagename:{
        type:String,
        
    },

    packagedescription:{
        type:String,
       
    },

    price:{
        type:String,
       
    },

    fileupload:{
        type:String,
       
    },

})


const addpackage = new mongoose.model('product',addpackageschema);
module.exports = addpackage;
