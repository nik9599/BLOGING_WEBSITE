import mongoose from "mongoose"
import dotEnv from "dotenv"
dotEnv.config()

export const connection =async ()=>{
    try{
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connection secured")
   }).catch((err)=>{
    console.log("Setup failed")
   })
    }catch(error){
          console.log(error)
    }
}