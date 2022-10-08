import axios from "../index";

// lodin admin request
const findCadryByJSHR = (payload)=>{
    return axios.get(`/api/organization/archive/pinfl`, {params:payload})
}


export default {findCadryByJSHR}