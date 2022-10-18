import axios from "../index";


const get_PartStatistic = (payload)=>{
    return axios.get(`/api/organization/statistics`)
}


export default {get_PartStatistic}