<template>
  <div>
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/index'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <div class="part-announcements-wrap">
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="MuCommodityList">
            <ul>
              <li v-for="h of house">
                <div class="item">
                  <router-link :to="{path:'/house/reserve',query:{name:h.position}}">
                    <div class="image">
                      <div class="LazyImage" style="width:100%;height:initial;">
                        <img :src="'../../../static/img/house/'+(h.photo)":title="h.position" alt="" class="active animate" style="height: initial">
                      </div>
                    </div>
                    <div class="title">
                      位置: {{h.position}}
                    </div>
                    <div class="title">
                      实际面积: {{h.actualarea}}
                    </div>
                    <div class="title">
                      类型: {{h.type}}
                    </div>
                    <div class="price"><span class="MuPriceTag">状态: {{h.start}}</span></div>
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

  import * as api from '../../control/axios/api.js'
  import axios from 'axios'

  import XHeader from "vux/src/components/x-header/index.vue";
  import Icon from "vux/src/components/icon/index.vue";
  import ViewBox from "vux/src/components/view-box/index.vue";
  import BottomNav from "./../footer/BottomNav.vue";
    export default {
        name: "Req_res",
      components: {ViewBox, Icon, XHeader,'buttom-nav':BottomNav},
      data(){
          return{
            house:[],
            tit:'全部房子信息'
          }
      },
      created:function () {
        var that=this;
        axios.post(api.house)
          .then(function (res) {
            that.house=res.data;
            console.log(that.house=res.data);

          })
      }
    }
</script>

<style scoped>
  @import "../../../static/css/css/show.css";
  @import "../../../static/css/less/index.less";
  @import '../../../static/font/font-awesome-4.7.0/css/font-awesome.css';
  .div-1{
    width: 100%;
    font-size:25px;
    display: flex;
    flex-direction:column
  }
  .div-1-show{
    width: 100%;
    height: 40%;
  }
  .dvi-1-info{
    margin-left:41%;
    margin-top: -20%;
    height:30% ;
  }
  .dvi-1-info p{
    font-size: 26px;
  }
  .left-arrow-a{
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
