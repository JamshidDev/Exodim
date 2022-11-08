const state ={
 bigOrganization:null,
 organization:null,
 department:null,

 orgValue:null,
 depValue:null,

}

const getters ={

}

const actions ={
    set_bigOrganization(ctx, payload){

    }

}

const mutations={
    update_bigOrganization(state, item){
        state.bigOrganization = item
    }

}

export default { state, actions, getters, mutations}