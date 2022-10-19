
const state ={
    activeHorizantal: JSON.parse(localStorage.getItem("menu")) || false,
    activeSidebar:JSON.parse(localStorage.getItem("sidebar")) || false,

    page:1,
    per_page:10,



}

const getters ={
    get_menuType(state){
        return state.activeHorizantal
    },
    get_Sidebar(state){
        return state.activeSidebar
    },
}

const actions ={
    actionMenu(ctx, payload){
        console.log(payload);
        localStorage.setItem("menu", JSON.stringify(payload))
        ctx.commit("update_Menu", payload)
    },
    actionSidebar(ctx, payload){
        console.log(payload);
        localStorage.setItem("sidebar", JSON.stringify(payload))
        ctx.commit("update_Sidebar", payload)
    },

   
}

const mutations={
    update_Menu(state, item){
        state.activeHorizantal = item
    },
    update_Sidebar(state, item){
        state.activeSidebar = item
    },
  
}

export default { state, actions, getters, mutations}