<template>
  <div>
    <view-box class="signUp gaofeng" bodyPaddingTop="0" bodyPaddingBottom="0">
      <x-header :title="tit">
        <div slot="overwrite-left" class="left-arrow">
          <router-link :to="{path:'/'}" class="left-arrow-a">返回</router-link>
          <!--<a href="/index">返回</a>-->
        </div>
        <div slot="right">欢迎您：{{loginid}}</div>
      </x-header>
      <divider>{{housePosition.position}}:的详情</divider>

      <div class="part-announcements-wrap">
        <div class="MuSectionWrapper">
          <div class="wrap">
            <div class="MuCommodityList">

              <div class="item">
                <div class="LazyImage" style="width:100%;height:initial;">
                  <img :src="'../../../static/img/house/'+(housePosition.photo)" :title="housePosition.position" alt=""
                       class="active animate" style="height: initial">
                </div>
              </div>
              <div align="center">
                <div class="title">
                  面积: {{housePosition.area}}
                </div>
                <div class="title">
                  实际面积: {{housePosition.actualarea}}
                </div>
                <div class="title">
                  类型: {{housePosition.type}}
                </div>
                <div class="title">
                  建筑结构：{{housePosition.strucure}}
                </div>
                <div class="title">
                  价格/㎡：{{housePosition.price}}
                </div>
                <div class="title">
                  总价格：{{housePosition.countprice}}
                </div>
                <div class="price">
                  <span class="MuPriceTag">状态: {{housePosition.start}}</span>
                </div>
                <div class="title">
                  <Button type="success" @click="insertBespeak">立即预定</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </view-box>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import *  as api from '../../control/axios/api.js'
  import Footer from './../footer/BottomNav.vue'
  import {
    Icon,
    Flexbox,
    XHeader,
    FlexboxItem,
    Swiper,
    SwiperItem,
    Cell,
    Popup,
    Scroller,
    XImg,
    Toast,
    ViewBox,
    XSwitch,
    XNumber
  } from 'vux'
  import Divider from "vux/src/components/divider/index.vue";

  const loginid = sessionStorage.getItem('loginid');
  //const name=this.$route.query.name;
  //console.log(name);
  export default {
    name: "Reserve",
    components: {
      Divider,
      Popup,
      Scroller,
      Toast,
      Swiper,
      SwiperItem,
      Cell,
      Flexbox,
      FlexboxItem,
      ViewBox,
      XSwitch,
      XNumber,
      XImg,
      Icon,
      XHeader,
      'v-footer': Footer
    },
    data() {
      return {
        tit: '房子信息',
        loginid: loginid,
        name: this.$route.query.name,
        housePosition: [],
        houseId: '',
        position: '',
        photo:'',
        userinfo: [],
        userId: '',
        Bespeak:''
      }
    }
    , created() {
      this.showHousePosition();
      this.selectUserId();
    }
    , methods: {
      showHousePosition() {
        //  const name = this.$route.query.name;
        const params = new URLSearchParams();
        params.append("position", this.$route.query.name)
        const that = this
        axios.post(api.selectHousePosition, params)
          .then(res => {
            this.housePosition = res.data
            this.houseId = this.housePosition.hid;
            this.position = this.housePosition.position;
            this.photo = this.housePosition.photo;
            sessionStorage.setItem('position', this.position)
            sessionStorage.setItem('houseId', this.houseId)
            sessionStorage.setItem('photo', this.photo)

          }).catch(err => {
          console.log(err)
        })
      }
      , selectUserId() {
        var loginid = sessionStorage.getItem('loginid');
        var info = new URLSearchParams();
        info.append('loginid', loginid);
        var that = this;
        axios.post(api.selectloginId, info)
          .then(function (res) {
            that.userinfo = res.data.uid;
            // console.log(that.userinfo);
          }).catch(function (err) {
          console.log(err);
        })
      }
      , insertBespeak() {
        const uid = sessionStorage.getItem('uid')
        const position = sessionStorage.getItem('position')
        const photo = sessionStorage.getItem('photo')
        const houseId = sessionStorage.getItem('houseId')
        const bespeak = new URLSearchParams();
        // bespeak.append('uid', JSON.stringify(uid))
        // bespeak.append('position', JSON.stringify(position))
        // bespeak.append('houseId', JSON.stringify(houseId))
        // bespeak.append('photo', JSON.stringify(photo))
        console.log(uid)
        console.log(position)
        console.log(houseId)
        console.log(photo)
        axios.post(api.insertBespeak,{params:{
          "uid":uid,"hid":houseId,"position":position,"pic":photo
          }})
          .then(res=>{
            this.Bespeak=res.data
          }).catch(err=>{
            console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../../static/css/css/show.css";
  @import "../../../static/css/less/searchResult.less";

  .left-arrow-a {
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
</style>
