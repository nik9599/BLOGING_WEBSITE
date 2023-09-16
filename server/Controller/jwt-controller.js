import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const authenticateToken = (req , res , next)=>{
    console.log("call")
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(" ")[1];
  
   if(!token){
       return res.status(401).json({msg:'token is missing'})
   }
  
   jwt.verify(token , process.env.SECRET_KEY , (error ,  user)=>{
    
    if(error){
        console.clear()
         return res.status(403).json({msg : 'invalid Token'})
    }
       req.user = user;
       next() 
   } )

}