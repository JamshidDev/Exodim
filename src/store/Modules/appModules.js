
const state ={
    activeHorizantal: JSON.parse(localStorage.getItem("menu")) || false
}

const getters ={
    get_menuType(state){
        return state.activeHorizantal
    }
}

const actions ={
    actionMenu(ctx, payload){
        console.log(payload);
        localStorage.setItem("menu", JSON.stringify(payload))
        ctx.commit("update_Menu", payload)
    }
}

const mutations={
    update_Menu(state, item){
        state.activeHorizantal = item
    }
}

export default { state, actions, getters, mutations}