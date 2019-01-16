<template>
  <div>
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/index'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <divider>小区图</divider>
    <div class="part-announcements-wrap">
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="MuCommodityList">
            <ul>
              <li v-for="res of res_qua">
                <div class="item">
                  <router-link :to="{path:'',query:{name:res.name}}">
                    <div class="image">
                      <div class="LazyImage" style="width:100%;height:initial;">
                        <img :src="'../../../static/img/res_qua/'+(res.pic)" :title="res.name" alt=""
                             class="active animate" style="height: initial">
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

  </div>
</template>

<script>
  import * as api from '../../control/axios/api.js'
  import axios from 'axios'

  import XHeader from "vux/src/components/x-header/index.vue";
  import Icon from "vux/src/components/icon/index.vue";
  import Divider from "vux/src/components/divider/index.vue";

  export default {
    name: "Req_res",
    components: {Divider, Icon, XHeader},
    data() {
      return {
        res_qua: [],
        tit: '全部小区信息'
      }
    },
    created: function () {
      var that = this;
      axios.post(api.req_res)
        .then(function (res) {
          that.res_qua = res.data;
          console.log(that.res_qua = res.data);

        })
    }
  }
</script>

<style scoped>
  @import '../../../static/css/less/index.less';
  @import '../../../static/css/css/show.css';
  @import '../../../static/font/font-awesome-4.7.0/css/font-awesome.css';

  html {
    font-size: 10px;
  }
  .left-arrow-a {
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
  :root {
    --hlyw-toolbar-font-color: #52526e;
    --font-size-10: 1rem;
    --font-size-15: 1.5rem;
    --font-size-20: 2rem;
    --font-size-25: 2.5rem;
  }

  .div-1 {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    height: 40%;
  }

  .div-1-show {
    width: 100%;
    height: 40%;
  }

  .dvi-1-info {
    margin-left: 41%;
    /*//margin-top: -20%;*/
    height: 30%;
  }

  .dvi-1-info p {
    font-size: 1.2rem;
  }

  @media screen and (min-device-width: 100px) and (max-device-width: 250px) {
    html {
      font-size: 6px;
    }

    .dvi-1-info p {
      font-size: 6px;
    }

    .dvi-1-info {
      margin-left: 41%;
      /*margin-top: -50px;*/
      height: 30%;
    }

    .img_big {
      width: 100%;
      height: 17%;
    }
  }

  @media screen and (min-device-width: 250px)and (max-device-width: 320px) {
    html {
      font-size: 8px;
    }

    .dvi-1-info p {
      font-size: 8px;
    }

    .dvi-1-info {
      margin-left: 41%;
      /*margin-top: -80px;*/
      height: 35%;
    }

    .div-1 {
      width: 100%;
      font-size: 8px;
      display: flex;
      flex-direction: column;
      height: 35%;
    }

  }

  /*5*/
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    html {
      font-size: 12px;
    }

    .dvi-1-info p {
      font-size: 12px;
    }

    .dvi-1-info {
      margin-left: 41%;
      /*margin-top: -80px;*/
      height: 30%;
    }

    .img_big {
      width: 100%;
      height: 17%;
    }
  }

  /*6*/
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
    html {
      font-size: 14px;
    }

    .dvi-1-info p {
      font-size: 14px;
    }
  }

  /*6+*/
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
    html {
      font-size: 16px;
    }

    .dvi-1-info p {
      font-size: 16px;
    }
  }
</style>
