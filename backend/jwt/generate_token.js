import jwt from 'jsonwebtoken';

const createTokenAndSaveCookies=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_TOKEN,
        {
            expiresIn:"10d"
        }
    );
    res.cookie("jwt",token,{
        httpOnly:true,  //safeguards us from xss attacks
        secure:true,
        sameSite:"strict" //safeguards us from csrf attacks
    });

}
export default createTokenAndSaveCookies