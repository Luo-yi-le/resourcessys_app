<template>
  <div id="self">
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/setting/setup'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <div class="weui-cells" >
      <router-link to="" class="weui-cell weui-cell_access"align="center">
        <div class="weui-cell__bd">
          <p>最新公告</p>
        </div>
      </router-link>
      <router-link to="" class="weui-cell weui-cell_access"v-for="sh of showOne">
        <div class="weui-cell__bd" >
          <p><span style="color: #c72a1c">{{sh.title}}</span>：
            <span style="color: #2baee9">{{sh.content}}</span> 在
            <span style="color: #2baee9">{{sh.date}}</span>  前入住完毕
          </p>
        </div>
      </router-link>
    </div>
    <div class="weui-cells" >
      <router-link to="" class="weui-cell weui-cell_access"align="center">
        <div class="weui-cell__bd">
          <p>全部公告</p>
        </div>
      </router-link>
      <router-link to="" class="weui-cell weui-cell_access"  v-for="show of showAll">
        <div class="weui-cell__bd" >
          <p><span style="color: #c72a1c">{{show.title}}</span>：
            <span style="color: #2baee9">{{show.content}}</span> 在
            <span style="color: #2baee9">{{show.date}}</span>  前入住完毕
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import XHeader from "vux/src/components/x-header/index.vue";

  import axios from 'axios'
  import *  as api from '../../control/axios/api.js'
  export default {
    name: "Notice",
    components: {XHeader},
    data() {
      return {
        tit: '相关公告',
        showAll:[],
        showOne:[]
      }
    }
    ,created(){
      this.showAllNotice();
      this.showOneNotice();
    }
    ,methods:{
      showAllNotice(){
        const that=this;
        axios.post(api.selectAllNoticeOrderBy)
          .then(function (res) {
            that.showAll = res.data;
            console.log(that.showAll = res.data);
          }).catch(function (err) {
          console.log(err)
        })
      }
      ,showOneNotice(){
        const that=this;
        axios.post(api.getAllNotice)
          .then(function (res) {
            that.showOne = res.data;
            console.log(that.showOne = res.data);
          }).catch(function (err) {
          console.log(err)
        })
      }
    }

  }
</script>

<style scoped>
  @import "../../../static/css/css/weui.min.css";
  .left-arrow-a {
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
</style>
