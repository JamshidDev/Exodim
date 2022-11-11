import axios from "../index";


const get_Qualification = (payload)=>{
    return axios.get(`/api/qualification/apparats`, {params:payload})
}

const search_Cadry = (payload)=>{
    return axios.get(`/api/organization/search/cadries`, {params:payload})
}



export default {get_Qualification,search_Cadry}