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
        res.status(201).json({message:"User Registered succesfully",
            user:{
                _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email
            }
        });

   }
    
   
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }


}
export const login= async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({error:"Invalid user credentials"});
        }
        createTokenAndSaveCookies(user._id,res);
        res.status(200).json({message:"User Logged in Successfully",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
        
    }

}

export const logout = async (req,res)=>{
    try {
        res.clearCookie('jwt');
        res.status(201).json({error:"User Logged Out Successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
        
        
    }
}

export const allUsers= async (req,res)=>{
    try {
        const loggedInUser=req.user._id;
        const filteredUsers=await User.find({
            _id:{$ne:loggedInUser},
        }).select('-password')
        res.status(201).json(filteredUsers)
    } catch (error) {
        console.log("Error in allUsers Controller:" + error);
    }
}

