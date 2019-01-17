<template>
  <tabbar>
    <tabbar-item v-for="item in bottomBar" :link="item.link">
      <i slot="icon"  :class="item.iconCls" > </i>
      <span slot="label"> {{item.name}}</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  //import {} from 'vux'
  import TabbarItem from "vux/src/components/tabbar/tabbar-item.vue";
  import Tabbar from "vux/src/components/tabbar/tabbar.vue"
import '../../assets/font-awesome-4.7.0/css/font-awesome.css'
  export default {
    name: 'BottomNav',
    components: {
      TabbarItem,
      Tabbar
    },
    props: [],
    data() {
      return {
        bottomBar: [
          {
            name: '首页',
            iconCls: 'fa fa fa-podcast fa-fw',
            link: '/index'
          },
          {
            name: '我的',
            iconCls: 'fa fa-info-circle fa-fw',
            link: '/my'
          },
          {
            name: '设置',
            iconCls: 'fa fa-cog fa-fw',
            link: '/setting'
          }
        ]
      }
    }
    // ,methods:{
    //   loginManager(){
    //     const loginid=sessionStorage.getItem('loginid');
    //     if (loginid===''||loginid===null){
    //
    //     }
    //   }
    //}
  }
</script>
<style scoped>
</style>
