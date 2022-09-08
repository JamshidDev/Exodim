const state ={
    adminPermissions:[],
    adminRoles:[],
    adminDetails:[],


}

const getters = {
    get_adminPermissions:(state)=> (key)=>{
        return  state.adminPermissions.length>0 ? state.adminPermissions.includes(key) : null;
    },
    get_adminDetails(state){
        return state.adminDetails
    }
}

const actions ={
    set_adminPermissions(ctx, payload){
        ctx.commit("update_adminPermissions", payload)
    },
    set_adminDetails(ctx, payload){
        ctx.commit("update_adminDetails", payload)
    },
    
    
}

const mutations = {
    update_adminPermissions(state, item){
        state.adminPermissions = item
    },
    update_adminDetails(state, item){
        state.adminDetails = item
    }
}

export default { state, actions, getters, mutations}