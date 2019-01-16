<template>
  <div id="self">
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/setting/setup'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <div class="weui-cells">
      <router-link to="" class="weui-cell weui-cell_access" align="center">
        <div class="weui-cell__bd">
          <p>我的订单</p>
        </div>
      </router-link>
      <router-link to="" class="weui-cell weui-cell_access" v-for="or of order">
        <div class="weui-cell__bd">
          <p>
            订单编号：<span style="color: #c72a1c">{{or.oid}}</span>
            花费了：<span style="color: #c72a1c">{{or.money}}</span>
          </p>
          <p>
            居住日期：<span style="color: #2baee9">{{or.countDate}}</span>
            详细：<span style="color: #2baee9">{{or.dateils}}</span>
          </p>
          <p>
            开始时间：<span style="color: #2baee9">{{or.expirdate}}</span>
            结束时间：<span style="color: #2baee9">{{or.transDate}}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

  import * as api from '../../control/axios/api.js'
  import axios from 'axios'
  import XHeader from "vux/src/components/x-header/index.vue";

  export default {
    name: "home",
    components: {XHeader},
    data() {
      return {
        order: []
        , user: []
        , id: ''
        , tit: '我的订单'
        ,
      }
    }
    , created() {
      this.showUserByLoginId();
      this.showOrderById();
    }
    , methods: {
      showUserByLoginId() {
        const that = this;
        const loginId = sessionStorage.getItem("loginid");
        var info = new FormData();
        info.append('loginid', loginId);
        axios.post(api.selectloginId, info)
          .then(res => {
            this.user = res.data;
            this.id = this.user.uid;
            sessionStorage.setItem('uid',this.user.uid)
            console.log("用户编号："+this.id)
          }).catch(err => {
          console.log(err)
        })
      }
      , showOrderById() {
        const that = this;
        const uid=sessionStorage.getItem('uid')
        const info = new FormData();
        info.append('uid', uid);
        info.append('name',name)
        console.log(uid)
        axios.post(api.orderById,info)
          .then(res => {
            that.order = res.data;
            console.log(that.order)
          }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../../static/css/css/show.css";
  @import "../../../static/css/css/weui.min.css";
  .left-arrow-a{
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
</style>
