// const express=require('express');
import express from 'express'
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import user_routes from './routes/user_routes.js';

const app=express();
dotenv.config();


//Middleware
app.use(express.json())

const PORT= process.env.PORT || 3001;
const URI=process.env.MONGODB_URI;

try{
    mongoose.connect(URI)
    console.log("COnnected to MongoDB");
    
}
catch{
    console.log(console.error());

    
}

//routes
app.use('/user',user_routes)

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})

