import axios from "../index";


const get_CadryMed = (payload)=>{
    return axios.get(`/api/organization/meds`, {params:payload})
}

export default {get_CadryMed}