import {createStore} from "vuex";

const store = createStore({
    state:{
        user:{
            data:{name: 'stone'},
            token: null
        }
    },
    getters:{},
    action:{},
    mutations:{},
    modules:{}
})

export default store;