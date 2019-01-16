<template>
  <div class="profile">
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/setting'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <div class="weui-cells" style="margin-top: -20px">
      <div class="weui-cell" id="avatarCell">
        <div class="weui-cell__bd">
          <p>头像</p>
        </div>
        <div class="weui-cell__ft">
          <img :src="'../../../static/img/user/'+(userinfo.pic)+'.jpg'" style="width: 50px;height: 50px;border-radius: 4px;">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>名字</p>
        </div>
        <div class="weui-cell__ft">
          {{userinfo.name}}
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>账号</p>
        </div>
        <div class="weui-cell__ft">
          {{userinfo.loginid}}
        </div>
      </div>
      <router-link to="" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>我的二维码</p>
        </div>
        <div class="weui-cell__ft">
          <img src="../../../static/img/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle">
        </div>
      </router-link>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>邮箱</p>
        </div>
        <div class="weui-cell__ft">
          {{userinfo.email}}
        </div>
      </div>

      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>性别</p>
          </div>
          <div class="weui-cell__ft">
            {{userinfo.sex}}
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>电话</p>
          </div>
          <div class="weui-cell__ft">
            {{userinfo.phone}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XHeader from "vux/src/components/x-header/index.vue";

  import axios from 'axios'
  import *  as api from '../../control/axios/api.js'


  export default {
    name: "UserInfo",
    components: {XHeader},
    data() {
      return {
        tit: "个人信息",
        userinfo: [],
        //loginid: loginid,
      }
    }
    , created() {
      this.showUser();
    }
    , methods: {
      showUser: function () {
        var loginid = sessionStorage.getItem('loginid');
        var info = new URLSearchParams();
        info.append('loginid', loginid);
        var that = this;
        axios.post(api.selectloginId, info)
          .then(function (res) {
            that.userinfo = res.data;
            console.log(that.userinfo = res.data);
          }).catch(function (err) {
          console.log(err);
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
