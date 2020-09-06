// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//axios 是不需要注入到Vue中的 可以直接使用
//import 要使用的变量的名字 from '路径的名字'
import fastclick from 'fastclick'
fastclick.attach(document.body);
//解决移动端的300毫秒点透的问题 上面的作用

//把引入的axios引入到Vue的原型上 这样的话哪里都可以用了
//使用的话就直接可以this.http
//axios是用于前后端的数据交互的  我们通过把axios挂到vue的原型上面
//然后就可以通过this.http在mock.js里面来获取数据了 这点非常重要
//如果获取不了数据那么我们还写什么 没有数据就是一潭死水
Vue.prototype.http=axios;

//
require("../mock")
//require引入的资源在后期是不会打包的 因为这个是个假的
//如果后期要打包的话就用import 进行引入
//引入mint-ui
import "./assets/css/base.css"
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

//import filter from "~/api/filter"
import filter from "@/components/api/filter"
//得把MintUi注册到构造函数中这样的话哪里都可以用了
//有的需要注册有的不需要注册具体的看情况

import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
//Vue.use(VueLazyload);这个是不需要的两个只要一个就可以了

import store from "./store/index"

//import { Toast } from 'mint-ui';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/img/github.png',
  loading: 'static/img/github.png',
  attempt: 1
})

Vue.use(MintUi);
Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
