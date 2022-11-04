import axios from "../index";


const get_ViewVacanc = (payload)=>{
    return axios.get(`/api/pereview/statistics/vacancies`, {params:payload})
}

const get_ViewSverx = (payload)=>{
    return axios.get(`/api/pereview/statistics/over`, {params:payload})
}

const get_ViewRetired = (payload)=>{
    return axios.get(`/api/pereview/statistics/retireds`, {params:payload})
}



const get_ViewBirthday = (payload)=>{
    return axios.get(`/api/pereview/statistics/birthdays`, {params:payload})
}




export default {get_ViewVacanc, get_ViewBirthday, get_ViewSverx,get_ViewRetired}