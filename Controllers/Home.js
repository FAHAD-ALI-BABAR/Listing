const path=require("path")
const rootDirectory=require("../utils/pathutils")
const Home=require("../Models/home")
exports.registrationRouter=(req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,"../","views","Register.html"))
    res.sendFile(path.join(rootDirectory,"views","Register.html"));

};
const registeredHomes=[];
exports.submit=(req,res,next)=>{
    
    const home=new Home(req.body.Name,req.body.Price,req.body.Rating,req.body.Photourl,req.body.Location)
    home.save();
    // res.sendFile(path.join(__dirname,"../","views","submit.html"))
    res.sendFile(path.join(rootDirectory,"views","submit.html"))
 }
 exports.registeredHomes=registeredHomes

 exports.error404=(req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,"views","404.html"));
    res.status(404).sendFile(path.join(rootDirectory,"views","404.html"));
    
}