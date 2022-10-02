import axios from "../index";


const get_Department = (payload)=>{
    return axios.get(`/api/organization/departments`, {params:payload})
}

const create_Department = (payload)=>{
    return axios.post(`/api/organization/add/department`,payload.data)
}

const update_Department = (payload)=>{
    return axios.put(`/api/organization/department/${payload.id}/update`,payload.data)
}

const delete_Department = (payload)=>{
    console.log(payload);
    return axios.delete(`/api/organization/department/${payload.id}/delete`)
}



export default {get_Department,create_Department,update_Department, delete_Department}