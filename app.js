var express=require('express');
const server=express();
server.set("view engine","ejs");
server.set("views","./pages")

server.listen(8000,function(){
    console.log("server started listening...")
    
});

server.get("/",function(req,res){
    res.render("login")
})
server.get("/home",function(req,res){
    res.render("home")
})
server.get("/login",function(req,res){
    res.render("login")
})
server.get("/aboutus",function(req,res){
    res.render("aboutus")
})
server.get("/services",function(req,res){
    res.render("services")
})
server.get("/register",function(req,res){
    res.render("register")
})
server.post("/validate",function(req,res){
      res.render("home")
})