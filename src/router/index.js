import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Router)

//const Logini=r=>require.ensure([],()=>r(require('@/components/login/Login.vue')),'Logini')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/index/Index.vue'], resolve),
      alias: '/index',
      meta:{
        KeepAlive: true,

      }
    }
    , {
      path: '/index/searchResult',
      name: 'searchResult',
      component: resolve => require(['@/components/index/searchResult.vue'], resolve),
      meta: {
        KeepAlive: true,//需要缓存,
        requiresAuth:true
      }
    }
    , {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/Login.vue'], resolve),
      alias: '/l'
    },
    {
      path: '/req_res',
      name: 'Req_res',
      component: resolve => require(['@/components/req_res/Req_res.vue'], resolve),
      alias: '/r',
      meta: {
        KeepAlive: true
      }
    },
    {
      path: '/house',
      name: 'House',
      component: resolve => require(['@/components/house/House.vue'], resolve),
      meta: {
        KeepAlive: true
      }
    },
    {
      path: '/setting',//主设置
      name: 'Setting',
      component: resolve => require(['@/components/user/Setting.vue'], resolve),
      meta: {
        KeepAlive: true,
        requiresAuth:true
      }
    }
    , {
      path: '/setting/userinfo',//用户信息
      name: 'UserInfo',
      component: resolve => require(['@/components/user/UserInfo.vue'], resolve),
      meta: {
        KeepAlive: true,
        requiresAuth:true
      }
    }
    , {
      path: '/setting/setup',//设置
      name: 'SetUp',
      component: resolve => require(['@/components/user/SetUp.vue'], resolve),
      meta:{
        KeepAlive: true,
        requiresAuth:true
      }
    }
    , {
      path: '/setting/setup/notice',//公告
      name: 'Notice',
      component: resolve => require(['@/components/user/Notice.vue'], resolve),
      meta:{
        KeepAlive: true
      }
    }
    , {
      path: '/home',//订单
      name: 'Home',
      component: resolve => require(['@/components/index/home.vue'], resolve),
      meta:{
        KeepAlive: true,
        requiresAuth:true
      }
    }
    ,{
      path: '/house/reserve',//房子的详细信息
      name: 'Reserve',
      component: resolve => require(['@/components/reserve/Reserve.vue'], resolve),
      meta:{
        KeepAlive: true,
        requiresAuth:true
      }
    }
  ]
})
