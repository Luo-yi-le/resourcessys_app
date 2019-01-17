<template>
  <div>
    <view-box class="signUp gaofeng" bodyPaddingTop="0" bodyPaddingBottom="0">
      <x-header :title="tit">
        <div slot="overwrite-left" class="left-arrow">
          <router-link :to="{path:'/house'}" class="left-arrow-a">返回</router-link>
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
                  <Button type="success" v-on:click="insertBespeak">立即预定</Button>
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
  import Qs from 'qs'
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
    name: "Bespeak",
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
        photo: '',
        userinfo: [],
        userId: '',
        Bespeak: ''
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
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const uid = parseInt(sessionStorage.getItem('uid'))
        const position = sessionStorage.getItem('position')
        const pic = sessionStorage.getItem('photo')
        const houseId = parseInt(sessionStorage.getItem('houseId'))
        // const bespeak = new URLSearchParams();
        // bespeak.append('uid',uid)
        // bespeak.append('position',position)
        // bespeak.append('houseId',houseId)
        // bespeak.append('photo',photo)
        console.log(uid)
        console.log(position)
        console.log(houseId)
        console.log(pic)

        const bespeak = {
          "uid":uid,
          "hid":houseId,
          "position":position,
          "pic":pic
        }
        const data = Qs.stringify(bespeak);
        axios({
            method: 'post',
            url: api.insertBespeak,
            params:{
              "uid": uid,
              "hid": houseId,
              "position": position,
              "pic": pic
            },
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
          }
        )
          .then(res => {
            if (confirm("预定成功,是否查看？")){
              this.$router.push("/house/reserve");
            }else{
              this.$router.push("/house");
            }
          }).catch(err => {
          console.log(err);
        })
        // $.ajax({Bespeak.vue
        //   url:"http://localhost:8080/bespeak/insertBespeak",
        //   type:'post',
        //   data:data,
        //   success:function (res) {
        //     alert("")
        //   }
        // })
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
  .footer {
    width: 100%;
    height: 50px; /* footer的高度一定要是固定值*/
    position: absolute;
    bottom: auto;
    left: 0px;
    background: #dddddd;
  }
</style>
