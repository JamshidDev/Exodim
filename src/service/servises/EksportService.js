import axios from "../index";

// user resume details request
const get_ResumeDetails = (payload)=>{
    return axios.get(`/api/cadry/ExportToWord/${payload.id}`)
}


export default {get_ResumeDetails}