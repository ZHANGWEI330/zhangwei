import Vue from "vue"
import Vuex from "vuex"
import  state from "./state"
import mutations from "./mutations"
//注意这里的state的引入方式
Vue.use(Vuex)
const store=new Vuex.Store({
    state,
    mutations,
});
export default store