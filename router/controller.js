const express = require('express');


const router=express.Router();
const registration = require('../modal/addregistrationschema');
const packages = require('../modal/addpackageschema');
const contacts = require('../modal/addcontactschema');
const multer = require('multer');
const bcrypt = require('bcrypt');

router.get('/', (req , res)=> {
    res.render('index');
})


// router.get('/',function(req,res) {
//     res.sendFile(__dirname+"/index.ejs");
//     res.send("home page ")
//     res.send("hello world")
// })


// router.get('/header',function(req,res){
//     res.render("/header");
    
// })

// router.get('/footer',function(req,res){
//     res.render("/footer");
    
// })

// register api
router.get('/registration',function(req,res){
    res.render("registration");
    
})

router.post('/register',(req,res)=>
{
 var register = {
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    mobile:req.body.mobile,
    password:req.body.password
 };

 var regpost = new registration(register);
 regpost.save()
 .then(()=>
 res.json('register successfully '))
 .catch(err=>res.status(400).json('error:'+err));
});


router.get('/delete/:id',async(req,res)=>{
    try{
        const registratedata= await registration.findByIdAndRemove(req.params.id);

        // res.send('<script>window.location.href="http://localhost:8080/view-registration";</script>')

        return res.redirect('http://localhost:8080/view-registration')
     
    } catch(err){
       
        console.log(err);
    }
});



router.get('/login',function(req,res){
    res.render("login");
    
})

router.post('/login',async(req,res)=>{
    var email = req.body.email,
    password = req.body.password;
 
    try{
        var user = await registration.findOne({email:email})
        .exec();
        console.log(user);
        if(!user){
            res.redirect("/login");
        }
        user.comparePassword(password,(error, match)=>{
            if(!match){
                res.redirect("/login");
            }
        });
        req.session.user = user;
        res.redirect("/dashboard/index");
    } catch (error){
        console.log(error)
    }
});

router.get('/logout',(req,res)=>{
    if(req.session.user && req.cookies.user_sid){
        res.clearCookie("user_sid");
        res.redirect("/");
    } else{
        res.redirect("/login");
    }
});

router.get('/dashboard/index',(req,res)=>{
     if(req.session.user && req.cookies.user_sid){

    
    res.render('dashboard/index')
}
     else{
             res.redirect("/login");
             }

});

router.get('/contact',function(req,res){
    res.render("contact");
    
})



router.get("/world",async (req,res)=>{
    try{
        const packgedata = await packages.find({});
        res.render('world',{packgedata:packgedata});
        console.log(packgedata);
    } catch(err){
        console.log(err);
    }
});






router.post('/contact',(req,res)=>
{
 var contct = {
    name:req.body.name,
    email:req.body.email,
    message:req.body.message
   
 };

 var cntactpost = new contacts(contct);
 cntactpost.save()
 .then(()=>
 res.json('contact successfully '))
 .catch(err=>res.status(400).json('error:'+err));
});


router.get('/india',function(req,res){
    res.render("india");
    
})

// router.get('/world',function(req,res){
//     res.render("world");
    
// })

router.get('/about',function(req,res){
    res.render("about");
    
})



router.get('/dashboard/index',(req,res)=>{
    res.render('dashboard/index')
})

router.get('/dashboard/left',(req,res)=>{
    res.render('dashboard/left')
})

router.get('/dashboard/datatable',(req,res)=>{
    res.render('dashboard/datatable')
})


// router.get('/dashboard/view-contact',(req,res)=>{
//     res.render('dashboard/view-contact')
// })

router.get("/view-contact",async (req,res)=>{
    try{
        const cntctdata = await contacts.find({});
        res.render('dashboard/view-contact',{cntctdata:cntctdata});
        console.log(cnctdata);
    } catch(err){
        console.log(err);
    }
});


router.get('/add-package',(req,res)=>{
    res.render('dashboard/add-package')
})


// router.post('/adpackage',(req,res)=>
// {
//  var adpackage = {
//     packagename:req.body.packagename,
//     packagedescription:req.body.packagedescription,
//     price:req.body.price,
//     fileupload:req.body.fileupload
    
//  };

//  var pckgepost = new packages(adpackage);
//  pckgepost.save()
//  .then(()=>
//  res.json(' Aapka Package add Ho Gya H - Dhanayvaad '))
//  .catch(err=>res.status(400).json('error:'+err));
// });

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');

    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const filefilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, filefilter});


router.post('/adpackage', upload.single('fileupload'), (req , res)=>{
    var adpackage = {
             packagename:req.body.packagename,
             packagedescription:req.body.packagedescription,
             price:req.body.price,
             fileupload:req.file.filename
            
          };
    var productpost = new packages(adpackage);
    productpost.save()
    .then(()=>

    res.json('register successfully'))
    .catch(err=> res.status(400).json('error:' + err));
})



router.get('/delete_2/:id',async(req,res)=>{
    try{
        const pckagedata= await packages.findByIdAndRemove(req.params.id);

        // res.send('<script>window.location.href="http://localhost:8080/view-registration";</script>')

        return res.redirect('http://localhost:8080/view-package')
     
    } catch(err){
       
        console.log(err);
    }
});


// router.get('/view-package',(req,res)=>{
//     res.render('dashboard/view-package')
// })

router.get("/view-package",async (req,res)=>{
    try{
        const packgedata = await packages.find({});
        res.render('dashboard/view-package',{packgedata:packgedata});
        console.log(packgedata);
    } catch(err){
        console.log(err);
    }
});

// router.get('/view-registration',(req,res)=>{
//     res.render('dashboard/view-registration')
// })

router.get("/view-registration",async (req,res)=>{
    try{
        const tourismsdata = await registration.find({});
        res.render('dashboard/view-registration',{tourismsdata:tourismsdata});
        console.log(tourismsdata);
    } catch(err){
        console.log(err);
    }
});

router.get('/edit-registration',(req,res)=>{
    res.render('dashboard/edit-registration')
})

router.get('/edit-registration/:id',async (req,res)=>{
    try{
        const editdata = await registration.findById(req.params.id);
        res.render('dashboard/edit-registration',{editdata:editdata});
        console.log(editdata);
    } catch(err){
        console.log(err);
    }
});

router.post('/edit-registration/:id',async (req,res)=>{
    try{
        var register = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password
         }
        const data= await registration.findByIdAndUpdate(req.params.id,register);
        // res.render('dashboard/viewsignup',{data:data});
        res.redirect('../view-registration');
    }catch(err){
        console.log(err);
    }
});

router.get('/edit-package',(req,res)=>{
    res.render('dashboard/edit-package')
})

router.get('/edit-package/:id',async (req,res)=>{
    try{
        const editpckge = await packages.findByIdAndUpdate(req.params.id);
        res.render('dashboard/edit-package',{editpckge:editpckge});
        console.log(editpckge);
    } catch(err){
        console.log(err);
    }
});

router.get('/packagedetails/:id' , async(req , res) =>{
    try{    
        const packgedata = await packages.findById(req.params.id);
        res.render('packagedetails' , {packgedata: packgedata});
        console.log(packgedata);

    }catch(err){
        console.log(err);
    }
});




module.exports = router;