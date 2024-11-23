//core modules
const path=require("path")
//External modules
const express=require("express")
//local modules
const userRouter=require("./Routes/userRouter")
const registerRouter=require("./Routes/registerRouter")
const {dataSubmit}=require("./Routes/dataSubmit")
const {registeredHomes}=require("./Routes/dataSubmit")
const rootDirectory=require("./utils/pathutils")
const controller=require("./Controllers/Home")
//apppp
const app=express();
app.use(express.urlencoded())
app.set("view engine","ejs")//to set ejs template engine
app.set("views ","views")
app.use(userRouter)
// app.get("/",(req,res,next)=>{
    
//     res.send(`<h1>Welcome to My home page</h1>
//         <a href="/register">Go to Register Page</a>
//         `)
// })
app.use(registerRouter)
// app.get("/register",(req,res,next)=>{
    
//     res.send(`<form action="/submit-detail" method="POST">
//         <input type="text" name="text" placeholder="Enter your name"/>
//         <input type="submit" value="submit"/>
//         </form>
//         `)
// })
app.use(dataSubmit)
// app.post("/submit-detail",(req,res,next)=>{
//    console.log(req.body);
   
//     res.send(`<h1>Data has been submitted successfully</h1>
//         <a href="/">Go to home page</a>
//         </form>
//         `)
// })
app.use(express.static(path.join(rootDirectory,"public")))//to access the public folder
app.use(controller.error404)
// app.listen(4000,()=>{
//     console.log("server is running on port 4000");
    
// })
module.exports = app;