import axios from "../index";

// lodin admin request
const get_Regions = (payload)=>{
    return axios.get(`/api/filter/regions`)
}


export default {get_Regions}