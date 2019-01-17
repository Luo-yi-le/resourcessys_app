<template>
  <div>
    <view-box class="signUp gaofeng" bodyPaddingTop="0" bodyPaddingBottom="0">
      <x-header :title="tit">
        <div slot="overwrite-left" class="left-arrow">
          <router-link :to="{path:'/'}" class="left-arrow-a">返回</router-link>
          <!--<a href="/index">返回</a>-->
        </div>
        <x-icon slot="right" type="person-add" style="fill:#fff;" v-bind:title="msg"></x-icon>
      </x-header>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-input type="text" required title="账<i class='vux-blank-half'></i><i class='vux-blank-half'></i>号 :"
                 v-model="loginId"
                 placeholder="请输入账号...">
        </x-input>
        <x-input type="password" title="密<i class='vux-blank-half'></i><i class='vux-blank-half'></i>码 :"
                 v-model="loginPwd" required placeholder="请输入密码(5位以上)">
        </x-input>
      </group>
      <box gap="10px 10px">
        <x-button plain action-type="button" style="background:dodgerblue;border-color:#ccc" @click.native="loginU">登录
        </x-button>
        <p>
          <router-link to="">还没有账号？快去注册</router-link>
        </p>
      </box>

    </view-box>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from './../footer/BottomNav.vue'
  import {Group, ViewBox, XHeader, Box, XInput, XButton, Grid, GridItem, GroupTitle} from 'vux'
  import axios from 'axios'
  import *  as api from '../../control/axios/api.js'

  export default {
    name: 'Login',
    components: {
      GroupTitle,
      GridItem,
      Grid,
      XButton,
      XInput,
      Box,
      XHeader,
      ViewBox,
      Group,
      'v-footer': Footer
    },
    data() {
      return {
        msg: '登陆',
        tit: '个人登陆中心',
        loginId: '',
        loginPwd: '',
      }
    }
    , beforeCreate() {
      if (sessionStorage.loginId) {
        this.$router.push('/index');
      }
    }
    , methods: {
      loginU: function () {
        var that = this;
        var user = new URLSearchParams();
        user.append('loginid', that.loginId);
        user.append('loginpwd', that.loginPwd);
        if (this.loginId !== "" && this.loginPwd !== "") {
          axios.post(api.login, user)
            .then(res => {
              sessionStorage.setItem("loginid", that.loginId);
              alert(that.loginId + '登陆成功');
             // this.$Message.success('登陆成功')
              //this.$store.commit('ADD_COUNT',res.data.token)
              this.$router.push("/index");

              //alert(that.loginId + '登陆成功');
              // let clock = window.setInterval(() => {
              //   this.totalTime-- ;
              //   if (this.totalTime < 0) {
              //
              //     sessionStorage.setItem("loginid", that.loginId);
              //     sessionStorage.removeItem("uid");
              //     window.clearInterval(clock) ;
              //     this.$Loading.finish();
              //     this.$router.push("/index");
              //   }
              // },500)
              console.log(this.loginId)
            }).catch(error => {
            this.$Loading.error();
            alert('账号或者密码错误')
            console.log(error);
          });
        } else {
          alert('账号或者密码错误');
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .signUp {
    .weui-input,
    .weui-label {
      font-size: 14px;
    }

    .left-arrow {
      width: 100px;
    }

    .left-arrow-a {
      margin-left: 20px;
      position: absolute;
      width: 50px;
      margin-top: 5px;
    }

    p {
      text-align: right;
    }

    .ui-code {
      line-height: 25px;
      font-size: 12px;
      border: 1px solid #ccc;
      padding: 0 5px;
      border-radius: 4px;
      position: absolute;
      right: 45px;
      bottom: 8px;
      z-index: 10;
    }
  }
</style>
