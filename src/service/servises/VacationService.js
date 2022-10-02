import axios from "../index";


const get_CadryVacation = (payload)=>{
    return axios.get(`/api/organization/vacations`, {params:payload})
}

const create_CadryVacation = (payload)=>{
    return axios.post(`/api/organization/vacations/add`, payload.data)
}

const update_CadryVacation = (payload)=>{
    return axios.put(`/api/organization/vacations/${payload.id}/update`, payload.data)
}

const delete_CadryVacation = (payload)=>{
    return axios.delete(`/api/organization/vacations/${payload.id}/delete`)
}

const get_VacationList = (payload)=>{
    return axios.get(`/api/organization/vacations/add`)
}

const search_Cadry = (payload)=>{
    return axios.get(`/api/organization/search/cadries`, {params:payload})
}

export default {get_CadryVacation,create_CadryVacation,update_CadryVacation,delete_CadryVacation,get_VacationList,search_Cadry}