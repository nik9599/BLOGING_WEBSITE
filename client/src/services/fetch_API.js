import axios from "axios";


export const loginuser = async (data)=>{
    const result =  await axios.post('http://localhost:5000/login',data)
    return result
}