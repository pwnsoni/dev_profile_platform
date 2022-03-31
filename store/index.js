export const state = () => ({
    isActiveSession: false,
    activeUser: ""
  })
  
export const mutations = {
    resetSession(state) {
        state.isActiveSession = false;
        state.activeUser = "";
    },

    initiateSession(state, data){
        state.isActiveSession = true;
        state.activeUser = data.userName;
    }
}

export const actions = {
    RESET_SESSION({commit}){
        commit('resetSession');
    },

    INITIATE_SESSION({commit}, data){
        // Do something
        console.log("in initiate session", data);
        commit('initiateSession', data)
    }
}