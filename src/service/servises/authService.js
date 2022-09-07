import axios from "../index";

// lodin admin request
const loginAdmin = (payload)=>{
    return axios.post(`/api/auth/login`, payload)
}


export default {loginAdmin}