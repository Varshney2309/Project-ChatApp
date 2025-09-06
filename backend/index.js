// const express=require('express');
import express from 'express'
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import user_routes from './routes/user_routes.js';
import message_routes from './routes/message_route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { app, server } from './SocketIO/server.js';


dotenv.config();

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT= process.env.PORT || 5000;
const URI=process.env.MONGODB_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });


//routes
app.use('/api/user',user_routes)
app.use('/api/message',message_routes)

server.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})

