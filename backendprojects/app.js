const express = require('express');
const app= express();
const mongoose = require("mongoose");
const path= require("path");
const { collection } = require('./userdet');


app.use(express.static("public"));
app.use(express.json());

const static_path = path.join("./view/signup.ejs");
app.use(express.static(static_path))

// app.use(express.static(path.join(__dirname, "public")));    
// app.use(express.static(path.join(__dirname, "view")));
                            
app.set('view engine', 'ejs');
const mongoURL ="mongodb+srv://saradhipardha12:PARDHA123@cluster0.n0euu2z.mongodb.net/loginform/login";

mongoose.connect(mongoURL)
.then(()=>{
    console.log("database is successfully connected");

})
.catch((e)=>console.log(e));

app.listen(5001,()=>{
    console.log("server started at port::${PORT}");

})
app.get('/signup' , (req,res) =>{
    res.render("../view/signup");
})
app.get('/login' , (req,res) =>{
    res.render("../view/login");
})

app.post('/signup',async(req,res)=>{
  
    console.log(req.body);

})
require('./userdet');
const User= mongoose.model('user');


app.post("/signup",async(req,res)=>{
    const { username,email,password } = req.body;
    try{
     await User.create({
        username:username,
        email,
        password,

     });
    //  res.send({status:'ok'})


console.log(collection[data]);
    } catch(error){
        console.error("Error during user creation:", error);
        res.status(500).send("Internal Server Error");

    }
})
app.listen(9000);