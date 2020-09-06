import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import cart from '@/components/view/cart/cart'
import category from '@/components/view/category/category'
import user from '@/components/view/user/user'
import detail from '@/components/view/detail/detail'

import order from '@/components/view/order/order'
import location from '@/components/view/order/location/location'
import addAddress from '@/components/view/order/location/addAddress/addAddress'

import setorder from '@/components/view/order/setorder/setorder'
import selfDetail from "@/components/view/user/selfDetail/selfDetail"
//在配置分页面的路由之前我们先引入写的页面在配置路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component:index
    },
    {
      path: '/cart',
      name:'cart',
      component:cart
    },
    {
      path: '/category',
      name:'category',
      component:category
    },
    {
      path: '/user',
      name:'user',
      component:user
    },
    {
      path:'/detail/:id1/:id2',
      name:'detail',
      component:detail 
      //注意detail后面要接收参数 这个我们要注意了
    },
    {
      path: '/order',
      name:'order',
      component:order
    },
    {
      path: '/location',
      name:'location',
      component:location
    },
    {
      path: '/addAddress',
      name:'addAddress',
      component:addAddress
    },
    {
      path: '/setorder',
      name:'setorder',
      component:setorder
    },
    {
      path: '/selfDetail',
      name:'selfDetail',
      component:selfDetail
    },
  ]
})
