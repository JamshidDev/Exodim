import axios from "../index";


const get_Qualification = (payload)=>{
    return axios.get(`/api/qualification/apparats`, {params:payload})
}

const search_Cadry = (payload)=>{
    return axios.get(`/api/organization/search/cadries`, {params:payload})
}

const get_Cadry_Qualification = (payload)=>{
    return axios.get(`/api/qualification/cadry/${payload.id}`)
}

const create_Qualification = (payload)=>{
    return axios.post(`/api/qualification/cadry/${payload.id}/add`, payload.data)
}

const update_Qualification = (payload)=>{
    return axios.put(`/api/qualification/${payload.id}/update`, payload.data)
}

const delete_Cadry_Qualification = (payload)=>{
    return axios.delete(`/api/qualification/${payload.id}/delete`)
}



export default {get_Qualification,search_Cadry, create_Qualification, get_Cadry_Qualification, update_Qualification, delete_Cadry_Qualification }