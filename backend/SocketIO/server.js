import {Server} from "socket.io"
import http from 'http'
import express from 'express'


const app=express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:" https://project-chatapp-3.onrender.com",
        methods:["GET","POST"]
    }
})

//realtime message code goes here
export const getReceiverSocketId = (receiverId)=>{
    return users[receiverId]
}

const users={}

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId){
        users[userId] = socket.id;
        console.log(users);
        

    }
    //used to send the events to all connected users
    io.emit("getOnlineUsers",Object.keys(users));


    //used to listen client side events emitted by server side and client side
    socket.on("disconnect",()=>{
        console.log("a user disconnected",socket.id);
        delete users[userId];
        io.emit("getOnlineUsers",Object.keys(users))
    })
})

export {app,io,server}