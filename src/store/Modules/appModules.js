
const state ={
    activeHorizantal: JSON.parse(localStorage.getItem("menu")) || false,

    page:1,
    per_page:10,



}

const getters ={
    get_menuType(state){
        return state.activeHorizantal
    },
    get_PageDetails(state){
        return{
            page:state.page,
            per_page:state.per_page,
        }
    }
}

const actions ={
    actionMenu(ctx, payload){
        console.log(payload);
        localStorage.setItem("menu", JSON.stringify(payload))
        ctx.commit("update_Menu", payload)
    },

    sinxronPagination(ctx, payload){
        ctx.commit("updatePage", payload)
    },
}

const mutations={
    update_Menu(state, item){
        state.activeHorizantal = item
    },
    updatePage(state, item){
        state.page = item.page;
        state.per_page =item.per_page;
    }
}

export default { state, actions, getters, mutations}