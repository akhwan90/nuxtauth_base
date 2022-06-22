export const state = () => ({
    isAuth: false,
    apiToken: null,
    userDetil: {
        username: null,
        name: null,
        profilPhoto: null,
    },
})

export const mutations = {
    SET_IS_AUTH(state, payload) {
        state.isAuth = payload
    },
    SET_API_TOKEN(state, payload) {
        state.apiToken = payload
    },
    SET_USER_DETIL(state, payload) {
        state.userDetil.username = payload.username
        state.userDetil.name = payload.name
        state.userDetil.profilPhoto = payload.profilPhoto
    },
}

export const actions = {
    nuxtServerInit({commit}, context) {
        commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)


        if (context.app.$auth.$state.loggedIn) {
            commit('SET_API_TOKEN', context.app.$auth.$state.user.api_token)

            if (context.app.$auth.$state.strategy == "facebook") {
                let payloadUser = {
                    username: context.app.$auth.user.email,
                    name: context.app.$auth.user.name,
                    profilPhoto: context.app.$auth.user.picture.data.url
                }
                commit('SET_USER_DETIL', payloadUser)
            } else if (context.app.$auth.$state.strategy == "local") {
                let payloadUser = {
                    username: context.app.$auth.user.email,
                    name: context.app.$auth.user.email,
                    profilPhoto: context.app.$auth.user.profile_pict,
                }
                commit('SET_USER_DETIL', payloadUser)
            } 
            // commit('SET_USER_DETIL', context.app.$auth.$state.user)

        }
    }
}