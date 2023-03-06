const express =require("express")
const http =require("http")
var path=require("path");
const { Socket } = require("socket.io");
var app=express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");
const server=http.createServer(app);
const io=require("socket.io")(server);
io.on("connection",(Socket)=>{
    console.log("User connected");
    Socket.emit("msg","A new user is connected")
})
server.listen(3000,()=>console.log("server is run"));