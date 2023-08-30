import axios from 'axios';



const baseURL = "https://bloging-website-api.vercel.app/login/";
const de = "http://localhost:8080/login";
const base = "http://localhost:8080";
export const logginUser = async (data)=>{
    try{
    let r = await axios.post(de,data)
    if(r){
        return r;
    }else{
        return false;
    }
}catch(error){
    console.log(error);
}

}

export const siggnupUser = async(data)=>{
 
    try {
        return await axios.post(base.concat("/signUp")) 
    } catch (error) {
        console.log(error)
    }
}