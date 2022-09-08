import axios from "../index";

// lodin admin request
const getOrganization = (payload)=>{
    return axios.get(`/api/management/organizations?railway_id=&organization_id=&department_id&per_page=10&page=4&last_name=bo&first_name=jo&middle_name=an&staff_id&sex&vacation_id&education_id&age_start&age_end`, payload)
}


export default {getOrganization}