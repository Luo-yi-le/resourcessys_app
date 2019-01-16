<template>
  <div>
    <x-header :title="tit" :style="backColor">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/index'}" class="left-arrow-a">返回</router-link>
      </div>
      <div slot="right">{{loginid}}|
        <label @click="Ulogin">登陆</label>
        <div class="icon-tool">
          <router-link class="zui-icon zui-icon-SEARCH_1" :to="{ path: '/index/searchResult'}">
          </router-link>
        </div>
      </div>

    </x-header>
    <!--图片-->
    <img src="../../../static/img/ban.jpg" title="图片"style="width: 100%;height:220px">
    <!--图标-->
    <div>
      <view-box>
        <tabbar >
          <tabbar-item v-for="item in tools" :link="item.link">
            <i slot="icon"  :class="item.iconCls" aria-hidden="true" style="font-size: 30px"></i>
            <span slot="label"> {{item.name}}</span>
          </tabbar-item>

        </tabbar>
      </view-box>
    </div>
    <divider>{{res_quaMsg}}</divider>
    <div class="part-announcements-wrap">
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="MuCommodityList">
            <ul>
              <li v-for="res of res_quaShow">
                <div class="item">
                  <router-link :to="{path:'',query:{name:res.name}}">
                  <div class="image">
                    <div class="LazyImage" style="width:100%;height:initial;">
                      <img :src="'../../../static/img/res_qua/'+(res.pic)":title="res.name" alt="" class="active animate" style="height: initial">
                    </div>
                  </div>
                  <div class="title">
                    小区: {{res.name}}
                  </div>
                  <div class="title">
                    竣工日期: {{res.completedate}}
                  </div>
                  <div class="title">
                    <router-link :to="{path:'',query:{name:res.detailed}}">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>地址: {{res.detailed}}
                    </router-link>
                  </div>
                  <div class="price"><span class="MuPriceTag">是否出售：{{res.sell}}</span></div>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <view-box style="height:100%;">
        <router-view></router-view>
        <buttom-nav></buttom-nav>
      </view-box>
    </footer>
  </div>
</template>
<script>
  //导入

  import * as api from '../../control/axios/api.js'
  import axios from 'axios'
  //注册
 import BottomNav from "./../footer/BottomNav.vue";

import {XHeader,Icon,ViewBox,TabbarItem,Tabbar,XHr,Divider}from 'vux'
  //获取localStorage
var loginid=sessionStorage.getItem('loginid');
console.log('用户'+loginid);
  export default {
    name: "Index",
    components: {Divider, XHr, TabbarItem,Tabbar,ViewBox, Icon, XHeader, 'buttom-nav':BottomNav},
    data() {
      return{
        backColor: {
          backgroundColor: '#412A2E'
        },
        loginid:loginid,
        tit:'首页',
        tools:[
          {
            name:'小区',
            iconCls: 'fa fa-home fa-fw fa-2x',
            link: '/req_res'
          },
          {
            name:'预定',
            iconCls: 'fa fa-home fa-2x',
            link: 'index'
          },
          {
            name:'房子',
            iconCls: 'fa fa-home fa-2x',
            link: '/house'
          }
        ],
        res_quaShow:[],
        res_quaMsg:'推荐小区',
        houseShow:[],
        houseMsg:'推荐房间'
      };
    },
    created() {
      this.res_qua()
      //this.house()
    },
    methods:{
      res_qua() {
        var that=this;
        axios.post(api.req_resLimit)
          .then(function (res) {
            that.res_quaShow=res.data;
            console.log(that.res_quaShow=res.data);

          });
      }
      ,Ulogin(){
        if (confirm("是否登陆？")){
          this.$router.push("/login");
        }
      }
      // house:function(){
      //   var that=this;
      //   axios.post(api.houseLimit)
      //     .then(function (res) {
      //       that.houseShow=res.data;
      //       console.log(that.houseShow=res.data);
      //
      //     })
      // }
    },

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../static/css/icon/icon.css";
  @import '../../../static/font/font-awesome-4.7.0/css/font-awesome.css';
  @import '../../../static/css/less/index.less';
  @import '../../../static/css/css/show.css';

  .footer {
    .footer {
      width: 100%;
      height:50px;   /* footer的高度一定要是固定值*/
      position:absolute;
      bottom: auto;
      left:0px;
      background: #dddddd;
    }
  }
  .left-arrow{
    width: 100px;
  }
  .left-arrow-a{
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
  .img_big{
    width: 100%;
    height: 22%;
  }

  .icon-tool{
    float: right;
  }
 .icon-tool .zui-icon{
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    line-height: 1.6;
    font-size: 24px;
   margin-top: -10px;
  }

</style>
