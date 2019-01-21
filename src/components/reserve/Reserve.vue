<template>
<div>
  <x-header :title="tit" style="height: 70px;">
    <div slot="overwrite-left" class="left-arrow">
      <router-link :to="{path:'/house'}" class="left-arrow-a">返回</router-link>
    </div>
  </x-header>
  <div class="weui-cells">
    <router-link to="" class="weui-cell weui-cell_access" align="center">
      <div class="weui-cell__bd">
        <p>{{loginid}}的预定</p>
      </div>
    </router-link>
  </div>
  <div class="part-announcements-wrap">
    <div class="MuSectionWrapper">
      <div class="wrap">
        <div class="MuCommodityList">
          <ul>
            <li v-for="res of reserve">
              <div class="item">
                <router-link to="">
                  <div class="image">
                    <div class="LazyImage" style="width:100%;height:initial;">
                      <img :src="'../../../static/img/house/'+(res.pic)":title="res.position" alt="" class="active animate" style="height: initial">
                    </div>
                  </div>
                  <div class="title">
                    房子: {{res.position}}
                  </div>
                  <div class="title">
                    预定日期: {{res.bdate}}
                  </div>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
  <v-footer></v-footer>
  </div>
</template>

<script>
  import ViewBox from "vux/src/components/view-box/index.vue";
  import XHeader from "vux/src/components/x-header/index.vue";
  import Divider from "vux/src/components/divider/index.vue";

  import axios from 'axios'
  import Qs from 'qs'
  import *  as api from '../../control/axios/api.js'
  import Footer from './../footer/BottomNav.vue'

  const loginid=sessionStorage.getItem('loginid');
  export default {
    name: "Reserve",
    components: {Divider, XHeader, ViewBox, 'v-footer': Footer},
    data(){
      return {
        tit:'预定详细',
        reserve:[],
        loginid:loginid
      }
    }
    ,created(){
      this.showReserve();
    }
    ,methods:{
      showReserve(){
        const uid=sessionStorage.getItem("uid");
        const id=new URLSearchParams();
        id.append("uid",uid)
        axios.post(api.selectAllBespeakByUid,id)
          .then(res=>{
            this.reserve=res.data
            console.log(this.reserve)
          }).catch(err=>{
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
