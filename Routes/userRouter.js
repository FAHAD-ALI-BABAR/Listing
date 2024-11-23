const path=require("path")
const fs=require("fs")
const express=require("express")
const userRouter=express.Router();
const rootDirectory=require("../utils/pathutils");
const { registeredHomes,submit } = require("./dataSubmit");
const Home=require("../Models/home")
userRouter.get("/",(req,res,next)=>{
 Home.fetchall((registeredHomes)=>{
    res.render("home",{registeredHomes:registeredHomes})
 });
 
    // console.log(registeredHomes);
   
    
   
    
    // res.sendFile(path.join(__dirname,"../","views","home.html"))
    // res.sendFile(path.join(rootDirectory,"views","home.html"))
    

})
module.exports=userRouter