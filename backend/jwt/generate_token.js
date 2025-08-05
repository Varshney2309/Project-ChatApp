import jwt from 'jsonwebtoken';

const createTokenAndSaveCookies=(userId,res)=>{
    const token=jwt.sign({userId},res)
}