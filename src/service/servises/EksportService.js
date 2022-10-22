import axios from "../index";

// user resume details request
const get_ResumeDetails = (payload)=>{
    return axios.get(`/api/cadry/ExportToWord/${payload.id}`)
}

const get_exportAnyDetails = (payload)=>{
    console.log(payload);
    return axios.get(`/api/organization/cadry/ExportToExcel`, {params:payload})
}





export default {get_ResumeDetails, get_exportAnyDetails}