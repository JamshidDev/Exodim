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

const get_employeeDetails = (payload)=>{
    return axios.get(`/api/organization/cadries/${payload.id}`)
}

const get_workLevel = (payload)=>{
    return axios.get(`/api/filter/worklevels`)
}


const update_empolyee = (payload)=>{
    return axios.post(`/api/organization/cadries/${payload.id}`, payload.data)
}



const get_employeeAvatar = (payload)=>{
    return axios.post(`/api/organization/cadries/${payload.id}/update/photo`, payload.form)
}








export default {get_Employees,get_Department,get_Stuffs,get_employeeDetails, get_employeeAvatar,update_empolyee,get_workLevel}