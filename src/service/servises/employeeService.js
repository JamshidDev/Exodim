import axios from "../index";

// lodin admin request
const get_Employees = (payload)=>{
    return axios.get(`/api/organization/cadries`, {params:payload},)
}

const get_Department = (payload)=>{
    return axios.get(`/api/organization/filter/departments`, {params:payload},)
}

const get_Stuffs = (payload)=>{
    return axios.get(`/api/organization/filter/staffs`, {params:payload},)
}



export default {get_Employees,get_Department,get_Stuffs}