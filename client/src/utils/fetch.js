import axios from 'axios'



const baseURL = "https://bloging-website-api.vercel.app/login/";

export const logginUser = async (data)=>{
    try{
    let r = await axios.post(baseURL,data)
    if(r){
        return true;
    }else{
        return false;
    }
}catch(error){
    console.log(error);
}

}