import User from '../models/user_model.js'
import bcrypt from 'bcryptjs'
import createTokenAndSaveCookies from '../jwt/generate_token.js'


export const signup= async(req,res)=>{
    const {fullname,email,password,confirmPassword} = req.body;
    try{
        if(password!=confirmPassword){
        return res.status(400).json({error:"Passwords do not match"});
    }
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({error:"User already registered"})
    }
    //hashing password
    const hashPassword= await bcrypt.hash(password,10)


    const newUser = await new User({
        fullname,
        email,
        password:hashPassword
    })
    await newUser.save();
   if(newUser){
        createTokenAndSaveCookies(newUser._id,res);
        res.status(201).json({message:"User Registered succesfully",newUser});

   }
    
   
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }


}

