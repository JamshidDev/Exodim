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
    return axios.put(`/api/organization/cadries/${payload.id}`, payload.data)
}



const get_employeeAvatar = (payload)=>{
    return axios.put(`/api/organization/cadries/${payload.id}/update/photo`, payload.form)
}

const get_CadryInfo = (payload)=>{
    return axios.get(`/api/organization/cadries/information/${payload.id}`)
}



const get_CadryUniversity = (payload)=>{
    return axios.get(`/api/organization/cadry/instituts`, {params:payload},)
}

const get_CadryAcademy = (payload)=>{
    return axios.get(`/api/organization/cadry/academicStudies`, {params:payload},)
}

const get_CadryAbroad = (payload)=>{
    return axios.get(`/api/organization/cadry/abroadStudies`, {params:payload},)
}

const get_Languages = (payload)=>{
    return axios.get(`/api/filter/languages`)
}

const get_Party = (payload)=>{
    return axios.get(`/api/filter/parties`)
}

const get_universityList= (payload)=>{
    return axios.get(`/api/filter/instituts`)
}

const get_Info= (payload)=>{
    return axios.get(`/api/filter/cadry-informations`)
}

const update_Info= (payload)=>{
    return axios.put(`/api/organization/cadries/information/${payload.id}`, payload.data)
}


const update_CadryUniversity = (payload)=>{
    return axios.put(`/api/organization/cadry/instituts/${payload.id}/update`, payload.data)
}

const adding_CadryUniversity = (payload)=>{
    return axios.post(`/api/organization/cadry/instituts/${payload.id}/add`, payload.data)
}

const delete_CadryUniversity = (payload)=>{
    return axios.delete(`/api/organization/cadry/instituts/${payload.id}/delete`)
}


















export default {get_Employees,get_Department,get_Stuffs,get_employeeDetails, get_employeeAvatar,update_empolyee,get_workLevel, get_CadryUniversity,get_CadryAcademy, get_CadryAbroad,get_CadryInfo,get_Languages,get_Party,get_universityList, update_CadryUniversity, adding_CadryUniversity, delete_CadryUniversity, get_Info, update_Info}