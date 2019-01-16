// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import control from './control/axios/api.js'

import metaInfo from 'vue-meta-info'
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css'// 导入样式
import '../static/font/font-awesome-4.7.0/css/font-awesome.css'
import '../static/css/less/common.less'

import 'jquery/dist/jquery.js'

/***
 * 粒子特效 效果不佳
 * */
import VueParticles from 'vue-particles'
FastClick.attach(document.body)

Vue.config.productionTip = false
/***
 * 应用库
 * **/
Vue.use(VueParticles)
Vue.use(iView)
Vue.use(Vuex)
Vue.use(metaInfo)

/***
 *  vuex状态管理
 */
const ADD_COUNT='ADD_COUNT'
const REMOVE_COUNT = 'REMOVE_COUNT';
/***
 * 注册全局管理参数export default new Vuex.store
 * */
// export default new
const  store=new Vuex.Store({
  state:{
    token:'',
    loginId: '',
  },
  mutations:{
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    [ADD_COUNT](state,token){ // 第一个参数为 state 用于变更状态 登录
      sessionStorage.setItem('token',token);
      state.token = token;
    },
    [REMOVE_COUNT](state,token){
      sessionStorage.removeItem('token');
      state.token=token;
    }
  }
});

router.beforeEach((to,from,next)=> {
  // const token=store.getters.userInfo()
  iView.LoadingBar.start();//加载效果
  store.state.token=sessionStorage.getItem('token');//获取sessionStorage
  if(to.matched.some(record=>record.meta.requiresAuth ||record.meta.homePage)){ //路由元信息requireAuth:true，或者homePages:true，则不做登录校验
    if(sessionStorage.getItem('token') !==''){//判断状态是否获取token
      next();
    }else{
      if (confirm("您还没登陆，请先登陆")) {
        next({
          path:'/login',
          // query: { redirect: to.fullPath }
        })
      }

    }
  }else {
    next();
  }
})

router.beforeResolve((to,from,next)=>{
  iView.LoadingBar.finish();//加载效果
  if(from.name=='page2'){
    to.meta.isBack=true;
    //判断是从哪个路由过来的，
    //如果是page2过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
  }
  next();
})

router.afterEach((to, from) => {
  iView.LoadingBar.finish();//加载效果
})



FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  store,
  control,
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app")
